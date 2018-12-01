import {
    ApolloClient, InMemoryCache, HttpLink, split
} from 'apollo-boost'
import fetch from 'isomorphic-unfetch'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { GRAPHQL_URL, WS_URL } from './urls'

let apolloClient = null
const ssrMode = !process.browser

// Polyfill fetch() on the server (used by apollo-client)
if (ssrMode) {
    global.fetch = fetch
}

function create(initialState) {
    const httpLink = new HttpLink({
        uri: GRAPHQL_URL,
        credentials: 'same-origin'
    })

    let link = httpLink

    if (!ssrMode) {
        // Create a WebSocket link:
        const wsLink = new WebSocketLink({
            uri: WS_URL,
            options: {
                reconnect: true
            }
        })

        // using the ability to split links, you can send data to each link
        // depending on what kind of operation is being sent
        link = split(
            // split based on operation type
            ({ query }) => {
                const { kind, operation } = getMainDefinition(query)
                return kind === 'OperationDefinition' && operation === 'subscription'
            },
            wsLink,
            httpLink
        )
    }

    return new ApolloClient({
        connectToDevTools: !ssrMode,
        ssrMode,
        link,
        cache: new InMemoryCache().restore(initialState || {})
    })
}

export default function initApollo(initialState) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (ssrMode) {
        return create(initialState)
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState)
    }

    return apolloClient
}

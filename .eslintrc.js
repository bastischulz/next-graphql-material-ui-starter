module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "radix": 0,
        "react/no-did-update-set-state": [false],
        "react/require-default-props": 0,
        "no-nested-ternary": 0,
        "max-len": 0,
        "no-underscore-dangle": 0,
        "react/jsx-wrap-multilines": 0,
        "react/forbid-prop-types": 0,
        "react/prop-types": 2,
        "prefer-const": 2,
        "jsx-a11y/anchor-is-valid": 0,
        "import/first": 0,
        "global-require": 0,
        "import/prefer-default-export": 0,
        "react/prefer-stateless-function": [2, { "ignorePureComponents": true }],
        "react/react-in-jsx-scope": 0,
        "click-events-have-key-events": 0,
        "jsx-quotes": [
            2,
            "prefer-single"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "indent": [
            2,
            4,
            {
                "SwitchCase": 1
            }
        ],
        "quotes": [
            2,
            "single"
        ],
        "quote-props": [
            2,
            "consistent"
        ],
        "no-console": [
            2,
            {
                "allow": [
                    "warn",
                    "error"
                ]
            }
        ],
        "no-continue": 0,
        "import/extensions": 0,
        "import/no-unresolved": 0,
        "import/no-extraneous-dependencies":
        [
            "error",
            {
                "devDependencies": true
            }
        ],
        "react/jsx-indent": [
            2,
            4
        ],
        "react/jsx-no-undef": 0,
        "react/jsx-indent-props": [
            2,
            4
        ],
        "semi": [
            2,
            "never"
        ],
        "ecmaVersion": 7,
        "jsx-a11y/label-has-for": [
            2,
            {
                "required": {
                    "some": [
                        "nesting",
                        "id"
                    ]
                }
            }
        ],
        "react/jsx-closing-bracket-location": [
            2,
            {
                "selfClosing": "line-aligned",
                "nonEmpty": "after-props"
            }
        ],
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
            "jsx": true
        },
        "no-plusplus": 0,
        "linebreak-style": "off"
    },
    "globals": {
        "React": true,
        "document": true,
        "localStorage": true,
        "window": true,
        "fetch": true,
        "test": true,
        "expect": true,
        "it": true,
        "beforeEach": true,
        "afterEach": true,
        "describe": true,
        "jest": true,
        "mount": true,
        "navigator": true,
        "URL": true,
        "Blob": true,
        "global": true,
        "process": true
    }
}


# APP.Superest
## An App duplicates Pinterest.

It's an application I did when I'm not busy. I've learnt MERN Stack with this [tutorial](https://hashnode.com/post/react-tutorial-using-mern-stack-ciiyus9m700qqge53mer0isxz) and I'm bored with following step by step in tutorial. I want to make something cool, different. So I come up with this ideal.

## Cheerio!

//.eslintrc.json

{
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "env": {
        "browser": true,
        "jquery": true,
        "node": true,
        "mocha": true,
        "es6": true
    },
    "globals": {
        "require": true
    },
    "parser": "babel-eslint",
    "rules": {
        "strict": 0,
        "indent": [
            "error",
            4
        ],
        "arrow-parens": ["error", "as-needed"],
        "no-console": 1,
        "no-unused-vars": 1,
        "no-unexpected-multiline": 1,
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ],
        "prefer-arrow-callback": 1,
        "react/prop-types": 0
    }
}

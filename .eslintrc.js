module.exports = {
    "env": {
      "browser": true,
      "es6": true,
    },
    "extends": "eslint-config-airbnb",
    "plugins": [
      "react",
    ],
    "globals": {
      "graphql": false,
    },
    "parserOptions": {
      "sourceType": "module",
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": false,
      },
    }
  }
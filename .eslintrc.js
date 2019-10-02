module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "prefer-destructuring": "off",
      "no-console": "off",
      "no-underscore-dangle": "off",
      "comma-dangle": "off",
      "no-continue": "off",
      "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/_story.jsx", "**/*.test.js", "**/*.spec.js"]}]
    }
};

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json'
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'airbnb-typescript'
    ],
    rules: {
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": true
            }
        ],
        "react/jsx-props-no-spreading": "off",
        "jsx-a11y/label-has-associated-control": [
            "error",
            {
              "labelComponents": [],
              "labelAttributes": [],
              "controlComponents": [],
              "assert": "either",
              "depth": 25
            }
        ],
        "react/require-default-props": "off",
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
    }
}

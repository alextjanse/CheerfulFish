module.exports = {
  env: {
    // Enable browser environment to recognize 'fetch' etc.
    'browser': true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  // Load AirBnB rules
  extends: ['airbnb-typescript'],
  // Setting to 0 disables the rule
  rules: {
    // Enable rules

    /**
     * Enforce curly braces in if, while, else, etc.
     * https://eslint.org/docs/rules/curly#all
     */
    'curly': ['error', 'all'],
    /**
     * Enforce multi line comments to used the starred style
     * https://eslint.org/docs/rules/multiline-comment-style
     */
    'multiline-comment-style': ['error', 'starred-block'],
    /**
     * Enforce comments to start with a capital letter
     * https://eslint.org/docs/rules/capitalized-comments
     */
    'capitalized-comments': ['error', 'always'],


    // Update rules

    'jsx-a11y/label-has-associated-control': [
      2, // Set rule to error
      {
        // Add Ant Design control components
        'controlComponents': [
          'AutoComplete',
          'Select',
        ],
      }
    ],

    // Next/link wraps an a tag with a Link component, but this brings errors
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"]
      }
    ],
    "jsx-a11y/anchor-has-content": [
      "error",
      {
        "components": ["Link"]
      }
    ]

    // Disable rules

    // Disable enforcing Unix style line ending
    'linebreak-style': 0,
    /**
     * Disable implicit boolean values
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     */
    'react/jsx-boolean-value': 0,
    // Allow autofocus
    'jsx-a11y/no-autofocus': 0,
    /**
     * Allow object literals to be either one-liners or multi-line
     * https://eslint.org/docs/rules/object-curly-newline
     */
    'object-curly-newline': ['error', { 'consistent': true }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': 0
  }
};

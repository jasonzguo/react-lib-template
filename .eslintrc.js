module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  extends: [
    'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended'  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    'indent': ['error', 2],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'react/prop-types': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error']
  },
  settings: {
    react: {
      version: 'detect'  // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  'ignorePatterns': ['*rc.js', '*config.js']
};
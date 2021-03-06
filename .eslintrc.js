module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'arrow-parens': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'global-require': 0,
    indent: ['error', 2],
    'jsx-quotes': [2, 'prefer-single'],
    "wrap-iife": [2, "any"]
  },
};

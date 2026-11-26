const eslint = require('@eslint/js');
const globals = require('globals');

module.exports = [
  { ignores: ['node_modules/**', 'test-results/**', 'reports/**', 'playwright-report/**'] },
  eslint.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['src/tests/**/*.js'],
    rules: {
      'no-unused-vars': 'off',
    },
  },
  {
    files: ['tests-examples/**/*.js'],
    languageOptions: {
      globals: globals.browser,
    },
  },
];

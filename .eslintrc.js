module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    mocha: true,
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'standard/no-callback-literal': 0,
  },
};

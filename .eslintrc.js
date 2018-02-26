module.exports = {
  extends: ['elemefe', 'plugin:vue/strongly-recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8
  },
  globals: {
    AMap: true,
    AMapUI: true
  },
  env: {
    es6: true
  },
  rules: {
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
    'vue/no-unused-vars': 0,
    'vue/require-prop-types': 0
  }
}

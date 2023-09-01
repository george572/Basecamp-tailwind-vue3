/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "semi": ["error", "always"],
    "func-call-spacing": "warn",
    "no-case-declarations": "off",
    "object-curly-spacing": ["error", "always"],
    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-template-shadow": "off",
    "vue/v-on-event-hyphenation": ["error", "always"],
    "indent": ["error", 2],
  },
};

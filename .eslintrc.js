module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  rules: { "no-console": "off", "spaced-comment": "off" },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {}
};

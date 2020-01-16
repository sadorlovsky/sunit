module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["standard"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["dist/", "node_modules/"],
  rules: {}
};

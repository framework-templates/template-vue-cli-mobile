/*
 * @Descripttion:
 * @Author: Weize
 * @Date: 2021-05-08 21:06:51
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-10 18:46:58
 */
module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ["plugin:vue/essential", "eslint:recommended"],

  parserOptions: {
    parser: "babel-eslint",
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },

  globals:{
    "document": true,
    "localStorage": true,
    "window": true
  },

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};

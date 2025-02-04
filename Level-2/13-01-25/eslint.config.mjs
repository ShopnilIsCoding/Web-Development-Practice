import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
// eslint.config.mjs
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
  // Any other config imports go at the top
  eslintPluginPrettierRecommended,
];

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["node_modules", "dist"],
    rules: {
      "no-unused-vars": "error",
      // "no-console":"warn",
      "prefer-const":"error",
      "no-unused-expressions": "error",
      "no-undef": "error",
    },
  },
];
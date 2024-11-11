import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules: {
      "capitalized-comments": ["error", "always"],
      "semi": true,
      "tabWidth": ["error", 2],
    },
  },
];
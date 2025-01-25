import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import globalsVitest from 'globals-vitest';

import wxtGlobals from './.wxt/eslint.config.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  wxtGlobals,
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  {
    ignores: ["node_modules", "dist", "eslint.config.js", ".**/", "postcss.config.mjs"],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globalsVitest },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: process.cwd(),
        project: "./tsconfig.json",
      },
    },
  },
  {
    rules: pluginJs.configs.recommended.rules,
  },
  {
    plugins: { "@typescript-eslint": tseslint },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          semi: true,
          singleQuote: false,
          tabWidth: 2,
          trailingComma: "es5",
          printWidth: 80,
          endOfLine: "auto"
        },
      ],
      ...prettier.rules,
    },
  },
];

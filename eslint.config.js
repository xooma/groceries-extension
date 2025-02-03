import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import globalsVitest from "globals-vitest";
import solidEslint from "eslint-plugin-solid";

import wxtGlobals from "./.wxt/eslint.config.js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  wxtGlobals,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
  },
  {
    ignores: [
      "node_modules",
      "dist",
      "eslint.config.js",
      ".**/",
      "postcss.config.cjs",
      "tailwind.config.js",
    ],
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
        ecmaFeatures: {
          jsx: true,
        },
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
      solid: solidEslint,
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
          printWidth: 80,
          endOfLine: "auto",
        },
      ],
      ...prettier.rules,
    },
  },
];

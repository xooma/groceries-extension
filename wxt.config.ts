import { defineConfig } from "wxt";

export default defineConfig({
  srcDir: "src",
  extensionApi: "chrome",
  imports: {
    eslintrc: {
      filePath: "eslint.config.js",
      enabled: 9,
    },
  },
  modules: ["@wxt-dev/module-solid"],
  manifest: {
    name: "groceries-list",
    version: "1.0.0",
    permissions: ["activeTab", "tabs", "storage", "background"],
  },
});

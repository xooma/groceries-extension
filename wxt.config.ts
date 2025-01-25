import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: "src",
  extensionApi: "chrome",
  imports: {
    eslintrc: {
      filePath: "eslint.config.js",
      enabled: 9,
    },
  },
});

import { defineConfig } from "wxt";
import eslintPlugin from "vite-plugin-eslint2";

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
  vite: (config) => {
    return {
      ...config,
      plugins: [
        eslintPlugin({
          cache: false,
        }),
      ],
    };
  },
});

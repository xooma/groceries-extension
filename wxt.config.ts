import { defineConfig } from "wxt";

export default defineConfig({
  srcDir: "src",
  modules: ["@wxt-dev/module-solid"],
  manifest: {
    name: "groceries-list",
    version: "1.0.0",
    permissions: ["activeTab", "tabs", "storage"],
  },
});

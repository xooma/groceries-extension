import "@/assets/main.css";
import { getRecipeJson } from "@/domain/get-json-recipe";
import App from "@/ui/App";
import { createShadowRootUi } from "wxt/client";

export default defineContentScript({
  matches: ["<all_urls>"],
  cssInjectionMode: "ui",
  async main(ctx) {
    const recipe = getRecipeJson();

    if (!recipe) return;

    const ui = await createShadowRootUi(ctx, {
      name: "example-ui",
      position: "inline",
      anchor: "body",
      onMount: (container) => {
        return render(() => <App />, container);
      },
      onRemove: (unmount) => {
        if (unmount) unmount();
      },
    });

    ui.mount();
  },
});

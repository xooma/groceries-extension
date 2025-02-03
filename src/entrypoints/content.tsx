import { render } from "solid-js/web";
import {
  type ContentScriptContext,
  type ShadowRootContentScriptUi,
  createShadowRootUi,
} from "wxt/client";
import { defineContentScript } from "wxt/sandbox";
import { storage } from "wxt/storage";

import { RecipeJson } from "@/core/infrastructure/interfaces";
import { GetJsonRecipe } from "@/core/domain";
import { Widget } from "@/core/ui";

import "@/assets/main.css";

export default defineContentScript({
  matches: ["<all_urls>"],
  cssInjectionMode: "ui",
  async main(ctx: ContentScriptContext) {
    await storage.removeItem("local:savedRecipes");

    let uiInstance: ShadowRootContentScriptUi<() => void> | null = null;
    async function mountWidget(recipe: RecipeJson) {
      uiInstance = await createShadowRootUi(ctx, {
        name: "groceries-widget",
        position: "inline",
        anchor: "body",
        onMount: (container) => {
          return render(() => <Widget recipe={recipe} />, container);
        },
        onRemove: (unmount) => {
          if (unmount) unmount();
        },
      });

      uiInstance.mount();
    }

    function unmountWidgetIfExists() {
      if (uiInstance) {
        uiInstance.remove();
        uiInstance = null;
      }
    }

    function checkForRecipe() {
      const recipe = new GetJsonRecipe(document).execute();

      if (recipe) mountWidget(recipe);
      else unmountWidgetIfExists();
    }

    ctx.addEventListener(window, "wxt:locationchange", () => {
      checkForRecipe();
    });

    checkForRecipe();

    document.addEventListener("beforeunload", () => {
      unmountWidgetIfExists();
    });
  },
});

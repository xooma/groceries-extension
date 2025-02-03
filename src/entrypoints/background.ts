import { saveRecipe } from "@/domain/save-recipe";

export default defineBackground(() => {
  browser.runtime.onMessage.addListener(
    // biome-ignore lint/suspicious/noExplicitAny: Chrome API
    (message: any, sender, sendResponse) => {
      if (message.type === "reviewList") {
        browser.tabs.create({ url: browser.runtime.getURL("/resume.html") });
      } else if (message.type === "addRecipe") {
        saveRecipe(message.recipe);
      }

      return true;
    },
  );
});

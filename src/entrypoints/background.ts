import { saveRecipe } from "@/domain/save-recipe";

export default defineBackground(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  browser.runtime.onMessage.addListener((message: any) => {
    if (message.type === "reviewList") {
      browser.tabs.create({ url: browser.runtime.getURL("/resume.html") });
    } else if (message.type === "addRecipe") {
      saveRecipe(message.recipe);
    }

    return true;
  });
});

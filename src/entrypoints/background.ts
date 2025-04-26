import { storage } from "wxt/storage";

import { SaveRecipe } from "@/core/domain";

export default defineBackground(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  browser.runtime.onMessage.addListener(async (message: any) => {
    if (message.type === "reviewList") {
      browser.tabs.create({ url: browser.runtime.getURL("/resume.html") });
    } else if (message.type === "addRecipe") {
      await new SaveRecipe(storage).execute(message.recipe);
    }

    return true;
  });
});

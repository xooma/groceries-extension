import { RecipeJson } from "@/core/infrastructure/interfaces";

export interface MessageService {
  addRecipe(recipe: RecipeJson): Promise<void>;
  reviewList(): Promise<void>;
}

export class RecipeMessageService implements MessageService {
  async addRecipe(recipe: RecipeJson): Promise<void> {
    return browser.runtime.sendMessage({ type: "addRecipe", recipe });
  }

  async reviewList(): Promise<void> {
    return browser.runtime.sendMessage({ type: "reviewList" });
  }
}

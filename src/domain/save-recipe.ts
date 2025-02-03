import type { RecipeJson } from "@/domain/interfaces";
import { storage } from "wxt/storage";

export async function saveRecipe(recipe: RecipeJson): Promise<void> {
  const savedRecipes: Array<RecipeJson> =
    (await storage.getItem("local:savedRecipes")) || [];
  savedRecipes.push(recipe);

  if (!savedRecipes.includes(recipe)) {
    await storage.setItem("local:savedRecipes", savedRecipes);
  } else {
    await storage.setItem("local:savedRecipes", savedRecipes);
  }
}

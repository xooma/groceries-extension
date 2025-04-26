import { UseCase } from "@/core/utils/use-case";
import { AbstractStorage, RecipeJson } from "@/core/infrastructure/interfaces";

export class SaveRecipe implements UseCase<Promise<void>> {
  constructor(private readonly storage: AbstractStorage) {}

  async execute(recipe: RecipeJson): Promise<void> {
    const savedRecipes: Array<RecipeJson> =
      (await this.storage.getItem("local:savedRecipes")) || [];

    if (!this.recipeExists(savedRecipes, recipe)) {
      savedRecipes.push(recipe);
      await this.storage.setItem("local:savedRecipes", savedRecipes);
    }
  }

  recipeExists(savedRecipes: RecipeJson[], recipe: RecipeJson) {
    return savedRecipes.some((savedRecipe) => savedRecipe.name === recipe.name);
  }
}

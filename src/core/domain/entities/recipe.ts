import { RecipeJson } from "@/core/infrastructure/interfaces";

export class Recipe {
  constructor(readonly recipeJson: RecipeJson) {}
}

import type { RecipeJson } from "@/domain/interfaces";

export function saveRecipe(recipe: RecipeJson): void {
  const savedRecipes = localStorage.getItem("savedRecipes_1234");

  if (savedRecipes && !savedRecipes.includes(recipe.name)) {
    const savedRecipesArray: RecipeJson[] = JSON.parse(savedRecipes);

    localStorage.setItem(
      "savedRecipes",
      JSON.stringify([...savedRecipesArray, recipe]),
    );
  } else {
    localStorage.setItem("savedRecipes", JSON.stringify([recipe]));
  }
}

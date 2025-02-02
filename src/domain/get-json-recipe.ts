import type { RecipeJson } from "./interfaces/recipe-json";

export function getRecipeJson(): RecipeJson | undefined {
  const jsonLdScripts: NodeListOf<Element> = document.querySelectorAll(
    'script[type="application/ld+json"]',
  );

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const isValidRecipe = (data: any) =>
    typeof data === "object" &&
    data["@type"] === "Recipe" &&
    typeof data.name === "string" &&
    Array.isArray(data.recipeIngredient);

  const scriptRecipe = Array.from(jsonLdScripts).find((script) =>
    isValidRecipe(JSON.parse(script.innerHTML)),
  );

  return scriptRecipe ? JSON.parse(scriptRecipe.innerHTML) : undefined;
}

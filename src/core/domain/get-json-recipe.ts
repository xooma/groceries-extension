import { UseCase } from "@/core/utils/use-case";
import { AbstractDocument, RecipeJson } from "@/core/infrastructure/interfaces";
import { Recipe } from "@/core/domain/entities";

export class GetJsonRecipe implements UseCase<RecipeJson | undefined> {
  constructor(private readonly document: AbstractDocument) {}

  execute(): RecipeJson | undefined {
    const jsonLdScripts: NodeListOf<Element> = this.document.querySelectorAll(
      'script[type="application/ld+json"]',
    );

    const jsonRecipe = Array.from(jsonLdScripts).find((script) =>
      this.isJsonRecipe(script.innerHTML),
    );

    return jsonRecipe ? JSON.parse(jsonRecipe.innerHTML) : undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isJsonRecipe(data: any): data is Recipe {
    const recipe = JSON.parse(data);

    return (
      typeof recipe === "object" &&
      recipe["@type"] === "Recipe" &&
      typeof recipe.name === "string" &&
      Array.isArray(recipe.recipeIngredient)
    );
  }
}

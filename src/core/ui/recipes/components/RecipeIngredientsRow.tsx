import { Component, Show } from "solid-js";
import { RecipeJson } from "@/core/infrastructure/interfaces";
import { IngredientsList } from "./IngredientsList";
import { RecipeInfoTable } from "./RecipeInfoTable";

type RecipeIngredientsRowProps = {
  recipe: RecipeJson;
  index: number;
};

export const RecipeIngredientsRow: Component<RecipeIngredientsRowProps> = (
  props,
) => {
  return (
    <tr class="ingredients-row">
      <td colspan={5} class="p-0">
        <div class="collapse bg-base-200">
          <input
            type="checkbox"
            id={`ingredients-${props.index}`}
            class="collapse-checkbox"
          />
          <div class="collapse-content p-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <IngredientsList ingredients={props.recipe.recipeIngredient} />
              <RecipeInfoTable recipe={props.recipe} />
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

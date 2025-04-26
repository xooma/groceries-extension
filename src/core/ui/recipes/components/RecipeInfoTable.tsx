import { Component, Show } from "solid-js";
import { RecipeJson } from "@/core/infrastructure/interfaces";

type RecipeInfoTableProps = {
  recipe: RecipeJson;
};

export const RecipeInfoTable: Component<RecipeInfoTableProps> = (props) => {
  return (
    <div>
      <h3 class="text-base font-semibold mb-2">Informations</h3>
      <table class="table table-sm">
        <tbody>
          <tr>
            <td class="font-medium">Temps de préparation:</td>
            <td>{props.recipe.prepTime || "-"}</td>
          </tr>
          <tr>
            <td class="font-medium">Temps de cuisson:</td>
            <td>{props.recipe.cookTime || "-"}</td>
          </tr>
          <tr>
            <td class="font-medium">Cuisine:</td>
            <td>{props.recipe.recipeCuisine || "-"}</td>
          </tr>
          <Show when={props.recipe.nutrition}>
            <tr>
              <td class="font-medium">Calories:</td>
              <td>{props.recipe.nutrition?.calories || "-"}</td>
            </tr>
          </Show>
        </tbody>
      </table>
    </div>
  );
};

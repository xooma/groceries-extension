import { Component } from "solid-js";
import { RecipeJson } from "@/core/infrastructure/interfaces";
import { RecipeActions } from "./RecipeActions";
import { RecipeServings } from "./RecipeServings";
import { ExpandIcon } from "@/core/ui/recipes/Icons";

type RecipeRowProps = {
  recipe: RecipeJson;
};

export const RecipeRow: Component<RecipeRowProps> = (props) => {
  return (
    <tr class="recipe-row">
      <td>
        <div class="font-bold flex items-center">
          <div class="collapse-title px-0 py-0 min-h-0 cursor-pointer flex items-center">
            <ExpandIcon />
            {props.recipe.name}
          </div>
        </div>
      </td>
      <td>{props.recipe.recipeCategory || "-"}</td>
      <td>
        <RecipeServings recipeYield={props.recipe.recipeYield} />
      </td>
      <td>{props.recipe.totalTime || "-"}</td>
      <td>
        <RecipeActions recipeUrl={props.recipe.description} />
      </td>
    </tr>
  );
};

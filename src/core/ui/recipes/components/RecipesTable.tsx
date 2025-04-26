import { Component, For } from "solid-js";
import { RecipeJson } from "@/core/infrastructure/interfaces";
import { RecipeRow } from "@/core/ui/recipes/components/RecipeRow";
import { RecipeIngredientsRow } from "@/core/ui/recipes/components/RecipeIngredientsRow";

type RecipesTableProps = {
  recipes: Array<RecipeJson> | null;
};

export const RecipesTable: Component<RecipesTableProps> = (props) => {
  return (
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Catégorie</th>
            <th>Portions</th>
            <th>Temps total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <For each={props.recipes}>
            {(recipe, index) => (
              <>
                <RecipeRow recipe={recipe} />
                <RecipeIngredientsRow recipe={recipe} index={index()} />
              </>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};

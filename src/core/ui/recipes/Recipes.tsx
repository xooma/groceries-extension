import { Show } from "solid-js";
import { RecipeJson } from "@/core/infrastructure/interfaces";
import { RecipesHeader } from "@/core/ui/recipes/components/RecipesHeader";
import { NoRecipes } from "@/core/ui/recipes/components/NoRecipes";
import { RecipesTable } from "@/core/ui/recipes/components/RecipesTable";

import "./Recipes.css";

type Props = {
  recipes: Array<RecipeJson> | null;
};

export function Recipes({ recipes }: Props) {
  return (
    <div class="cart-container">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <RecipesHeader />

          <Show when={recipes && recipes.length > 0} fallback={<NoRecipes />}>
            <RecipesTable recipes={recipes} />
          </Show>
        </div>
      </div>
    </div>
  );
}

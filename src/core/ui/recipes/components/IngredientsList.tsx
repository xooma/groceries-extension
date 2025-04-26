import { Component, For } from "solid-js";

type IngredientsListProps = {
  ingredients: string[];
};

export const IngredientsList: Component<IngredientsListProps> = (props) => {
  return (
    <div>
      <h3 class="text-base font-semibold mb-2">Ingrédients</h3>
      <ul class="list-disc pl-5 space-y-1">
        <For each={props.ingredients}>
          {(ingredient) => <li>{ingredient}</li>}
        </For>
      </ul>
    </div>
  );
};

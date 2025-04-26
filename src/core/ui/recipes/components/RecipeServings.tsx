import { Component } from "solid-js";

type RecipeServingsProps = {
  recipeYield: string | string[] | undefined;
};

export const RecipeServings: Component<RecipeServingsProps> = (props) => {
  const getServingsCount = (yield_: string | string[] | undefined): string => {
    if (!yield_) return "4";
    if (Array.isArray(yield_)) return yield_[0].replace(/\D/g, "") || "4";
    return yield_.replace(/\D/g, "") || "4";
  };

  return (
    <div class="flex items-center">
      <input
        type="number"
        class="input input-bordered input-sm w-16 text-center"
        value={getServingsCount(props.recipeYield)}
        min="1"
        max="20"
      />
      <span class="ml-2">pers.</span>
    </div>
  );
};

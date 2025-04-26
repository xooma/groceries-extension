import { Component } from "solid-js";
import { DeleteIcon, ExternalLinkIcon } from "@/core/ui/recipes/Icons";

type RecipeActionsProps = {
  recipeUrl: string;
};

export const RecipeActions: Component<RecipeActionsProps> = (props) => {
  const handleDelete = () => {
    // Implementation for delete functionality
  };

  return (
    <div class="flex gap-1">
      <button
        class="btn btn-sm btn-circle btn-outline"
        title="Supprimer"
        onClick={handleDelete}
      >
        <DeleteIcon />
      </button>
      <a
        href={props.recipeUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-sm btn-circle btn-outline"
        title="Voir la recette"
      >
        <ExternalLinkIcon />
      </a>
    </div>
  );
};

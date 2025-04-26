import { createSignal, Show } from "solid-js";
import { RecipeJson } from "@/core/infrastructure/interfaces";

import {
  MessageService,
  RecipeMessageService,
} from "@/core/ui/services/messaging.service";
import { AddIcon, CartIcon } from "@/core/ui/widget/components/Icon";

import "./Widget.css";

type Props = {
  recipe: RecipeJson;
  messageService?: MessageService;
};

export function Widget({ recipe, messageService }: Props) {
  const [isOpen, setIsOpen] = createSignal(false);
  const [portions, setPortions] = createSignal(
    typeof recipe.recipeYield === "string"
      ? parseInt(recipe.recipeYield.replace(/\D/g, "")) || 4
      : 4,
  );

  const messageSvc = messageService || new RecipeMessageService();

  const addRecipe = () => {
    const updatedRecipe = {
      ...recipe,
      recipeYield: `${portions()}`,
    };
    messageSvc.addRecipe(updatedRecipe);
  };

  const reviewList = () => {
    messageSvc.reviewList();
  };

  const increasePortions = () => {
    if (portions() < 20) {
      setPortions(portions() + 1);
    }
  };

  const decreasePortions = () => {
    if (portions() > 1) {
      setPortions(portions() - 1);
    }
  };

  return (
    <div
      class="widget-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Show when={!isOpen()}>
        <button class="btn btn-circle btn-primary widget-button">
          <CartIcon />
        </button>
      </Show>

      <Show when={isOpen()}>
        <div class="widget-menu card bg-primary text-primary-content">
          <div class="card-body p-4 items-center">
            <h3 class="card-title text-base mb-2">
              {" "}
              {recipe.name.length > 20
                ? recipe.name.substring(0, 20) + "..."
                : recipe.name}
            </h3>

            <div class="portions-control mb-2">
              <div class="flex items-center justify-between w-full">
                <span class="text-sm font-medium">Portions:</span>
                <div class="flex items-center">
                  <button
                    class="btn btn-xs btn-circle btn-secondary"
                    onClick={decreasePortions}
                    disabled={portions() <= 1}
                  >
                    -
                  </button>
                  <span class="mx-2 font-bold">{portions()}</span>
                  <button
                    class="btn btn-xs btn-circle btn-secondary"
                    onClick={increasePortions}
                    disabled={portions() >= 20}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-3 w-full">
              <button
                class="btn btn-secondary w-full"
                data-tip="Add recipe"
                onClick={addRecipe}
              >
                <AddIcon />
                <span class="ml-2">Add</span>
              </button>

              <button
                class="btn btn-secondary w-full"
                data-tip="View cart"
                onClick={reviewList}
              >
                <CartIcon />
                <span class="ml-2">View</span>
              </button>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
}

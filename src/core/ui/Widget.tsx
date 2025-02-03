import { createSignal } from "solid-js";

import addIcon from "@/assets/add.svg";
import cartIcon from "@/assets/cart.svg";
import logoIcon from "@/assets/logo.svg";

import "./Widget.css";
import { RecipeJson } from "@/core/infrastructure/interfaces";

type Props = {
  recipe: RecipeJson;
};

export function Widget({ recipe }: Props) {
  const [hovered, setHovered] = createSignal(false);

  const addRecipe = () => {
    browser.runtime.sendMessage({ type: "addRecipe", recipe });
  };

  const reviewList = () => {
    browser.runtime.sendMessage({
      type: "reviewList",
    });
  };

  return (
    <>
      <div
        class="app-icon"
        classList={{ expanded: hovered() }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img class="logo" src={logoIcon} alt="Logo" />
        <div class="menu">
          <img
            class="icon"
            src={addIcon}
            alt="Add recipe"
            onClick={addRecipe}
          />
          <span class="separator" />
          <img
            class="icon"
            src={cartIcon}
            alt="Get list"
            onClick={reviewList}
          />
        </div>
      </div>
    </>
  );
}

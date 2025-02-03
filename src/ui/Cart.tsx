import type { RecipeJson } from "@/domain/interfaces";

import "./Cart.css";

type Props = {
  recipes: Array<RecipeJson> | null;
};

function Cart({ recipes }: Props) {
  return <div>{recipes?.map((recipe) => <p>{recipe.name}</p>)}</div>;
}

export default Cart;

import "./Cart.css";
import { RecipeJson } from "@/core/infrastructure/interfaces";

type Props = {
  recipes: Array<RecipeJson> | null;
};

export function Cart({ recipes }: Props) {
  return <div>{recipes?.map((recipe) => <p>{recipe.name}</p>)}</div>;
}

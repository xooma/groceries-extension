export function getRecipes() {
  return JSON.parse(localStorage.getItem("savedRecipes") || "[]");
}

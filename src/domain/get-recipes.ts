import type { RecipeJson } from "@/domain/interfaces";
import { storage } from "wxt/storage";

export async function getRecipes(): Promise<Array<RecipeJson> | null> {
  return (await storage.getItem("local:savedRecipes")) || [];
}

import { storage } from "wxt/storage";
import { UseCase } from "@/core/utils/use-case";
import { AbstractStorage, RecipeJson } from "@/core/infrastructure/interfaces";

export class ListRecipes implements UseCase<Promise<Array<RecipeJson> | null>> {
  constructor(private readonly storage: AbstractStorage) {}

  async execute(): Promise<Array<RecipeJson> | null> {
    return (await storage.getItem("local:savedRecipes")) || [];
  }
}

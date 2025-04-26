import { beforeEach, describe, expect, test } from "vitest";
import { AbstractDocument } from "@/core/infrastructure/interfaces";
import { GetJsonRecipe } from "@/core/domain";

class StubDocument implements AbstractDocument {
  private elements: { [selector: string]: Element[] } = {};

  querySelectorAll(selector: string): NodeListOf<Element> {
    return (this.elements[selector] || []) as unknown as NodeListOf<Element>;
  }

  addScript(type: string, content: string) {
    const script = { type, innerHTML: content } as unknown as HTMLScriptElement;
    this.elements['script[type="application/ld+json"]'] = [script];
  }

  addEventListener(_event: string, _callback: () => void): void {
    throw new Error("Method not implemented.");
  }

  getElementById(_id: string): Element | null {
    throw new Error("Method not implemented.");
  }

  querySelector(_selector: string): Element | null {
    throw new Error("Method not implemented.");
  }
}

describe("GetJsonRecipe Use Case", () => {
  let document: StubDocument;
  let getJsonRecipe: GetJsonRecipe;

  beforeEach(() => {
    document = new StubDocument();
    getJsonRecipe = new GetJsonRecipe(document);
  });

  test("should return parsed JSON recipe when valid JSON-LD script is present", () => {
    const validRecipeJson = JSON.stringify({
      "@type": "Recipe",
      name: "Chocolate Cake",
      recipeIngredient: ["Flour", "Sugar", "Cocoa Powder"],
    });

    document.addScript("application/ld+json", validRecipeJson);

    const result = getJsonRecipe.execute();

    expect(result).toEqual(JSON.parse(validRecipeJson));
  });

  test("should return undefined if no JSON-LD script is present", () => {
    const result = getJsonRecipe.execute();
    expect(result).toBeUndefined();
  });

  test("should return undefined if JSON-LD script does not contain a Recipe", () => {
    const nonRecipeJson = JSON.stringify({
      "@type": "Article",
      title: "Not a Recipe",
    });

    document.addScript("application/ld+json", nonRecipeJson);

    const result = getJsonRecipe.execute();
    expect(result).toBeUndefined();
  });

  test("should return undefined if JSON-LD script is invalid JSON", () => {
    document.addScript("application/ld+json", "{ invalid json }");
    expect(() => getJsonRecipe.execute()).toThrow(SyntaxError);
  });
});

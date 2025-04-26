import { render } from "solid-js/web";
import { defineBackground } from "wxt/sandbox";
import { storage } from "wxt/storage";

import { ListRecipes } from "@/core/domain";
import { Recipes } from "@/core/ui/recipes/Recipes";

export default defineBackground({
  async main() {
    const container = document.getElementById("app");
    const recipes = await new ListRecipes(storage).execute();

    if (container) {
      render(
        () => (
          <>
            <Suspense fallback={<p>Loading...</p>}>
              <Recipes recipes={recipes} />
            </Suspense>
          </>
        ),
        container,
      );
    }
  },
});

import { getRecipes } from "@/domain/get-recipes";
import Cart from "@/ui/Cart";
import { render } from "solid-js/web";
import { defineBackground } from "wxt/sandbox";

export default defineBackground({
  async main() {
    const container = document.getElementById("app");
    const recipes = await getRecipes();

    if (container) {
      render(
        () => (
          <>
            <Suspense fallback={<p>Loading...</p>}>
              <Cart recipes={recipes} />
            </Suspense>
          </>
        ),
        container,
      );
    }
  },
});

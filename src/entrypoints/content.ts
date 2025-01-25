export default defineContentScript({
  matches: [
    "*://*.marmiton.org/recettes/*",
    "*://jow.fr/recipes/*",
    "*://*.latavoladigael.com/recette/*",
    "*://*.cookomix.com/recettes/*",
  ],
  main() {
    console.log("Hello content.");
  },
});

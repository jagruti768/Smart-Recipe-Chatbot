
const recipeForm = document.getElementById("recipe-form");
const ingredientsInput = document.getElementById("ingredients");
const searchMessage = document.getElementById("search-message");
const ingredientChips = document.querySelectorAll(".ingredient-chip");

// Fill the search box when a suggested ingredient is selected.
ingredientChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    ingredientsInput.value = chip.dataset.ingredient;
    ingredientsInput.focus();
  });
});

// This is a UI demonstration, not a recipe-generation engine.
// The Dialogflow chatbot will provide conversational recipe help.
recipeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const ingredients = ingredientsInput.value.trim();

  if (!ingredients) {
    searchMessage.textContent =
      "Please enter at least one ingredient to get started.";
    ingredientsInput.focus();
    return;
  }

  searchMessage.textContent =
    `Your ingredients: ${ingredients}. Open the Smart Recipe Assistant ` +
    "chat in the bottom-right corner and ask for recipes using them.";
});

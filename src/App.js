import React from "react";
import RecipesForm from "./components/RecipesForm/RecipesForm";
import RecipesList from "./components/RecipesList/RecipesList";
import RecipesSelected from "./components/RecipesSelected/RecipesSelected";
import "./App.css";

function App() {
  const [recipesList, setRecipesList] = React.useState([]);
  const [selectedRecipe, setSelectedRecipe] = React.useState(null);

  const API_URL = "http://localhost:4000/recipes";

  React.useEffect(() => {
    getAllRecipesFromApi();
  }, []);

  const getAllRecipesFromApi = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setRecipesList(data);
      })
      .catch((error) => console.error("Error:", error));
  };

  const addNewRecipe = (newRecipe) => {
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(newRecipe),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        getAllRecipesFromApi();
      })
      .catch((error) => console.error("Error:", error));
  };

  const deleteRecipe = React.useCallback((recipe) => {
    fetch(`${API_URL}/${recipe.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => getAllRecipesFromApi());
  }, []);

  const updateRecipe = (updatedRecipe) => {
    fetch(`${API_URL}/${updatedRecipe.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedRecipe),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setSelectedRecipe(updatedRecipe);
        getAllRecipesFromApi();
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="App">
      <RecipesForm addNewRecipe={addNewRecipe}></RecipesForm>
      <RecipesList
        recipesList={recipesList}
        deleteRecipe={deleteRecipe}
        onSelectedRecipe={setSelectedRecipe}
      ></RecipesList>
      <RecipesSelected
        selectedRecipe={selectedRecipe}
        updateRecipe={updateRecipe}
      />
    </div>
  );
}

export default App;
import React from "react";
import RecipesItemMemo from "../RecipesItem/RecipesItem";
import "./RecipesList.css";

const RecipesList = React.memo(
  ({ recipesList, deleteRecipe, onSelectedRecipe }) => {
    return (
      <div className="recipes-list">
        <h2 className="recipes-list__title">Listado de recetas:</h2>
        {recipesList.map((recipe) => (
          <RecipesItemMemo
            key={recipe.id}
            recipe={recipe}
            deleteRecipe={deleteRecipe}
            onSelectedRecipe={onSelectedRecipe}
          />
        ))}
      </div>
    );
  }
);

export default RecipesList;
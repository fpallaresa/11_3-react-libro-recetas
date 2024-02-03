import React from "react";
import "./RecipesItem.css";

const RecipesItem = ({ recipe, deleteRecipe, onSelectedRecipe }) => {
  return (
    <div className="recipes-list__item" key={recipe.id}>
      <img
        className="recipes-list__item-image"
        src={recipe.imageUrl}
        alt={recipe.name}
        onClick={() => onSelectedRecipe(recipe)}
      />
      <div className="recipes-list__item-info">
        <p
          className="recipes-list__item-name"
          onClick={() => onSelectedRecipe(recipe)}
        >
          {recipe.name}
        </p>
        <p className="recipes-list__item-people">
          Número de personas: {recipe.numPeople}
        </p>
        <button
          className="recipes-list__delete-item-button"
          onClick={() => deleteRecipe(recipe)}
        >
          ELIMINAR
        </button>
      </div>
    </div>
  );
};

const RecipesItemMemo = React.memo(RecipesItem);

export default RecipesItemMemo;
import React from "react";
import "./RecipesSelected.css";

const RecipesSelected = ({ selectedRecipe, updateRecipe }) => {
  const [newIngredient, setNewIngredient] = React.useState("");
  const [newQuantity, setNewQuantity] = React.useState("");

  const removeIngredient = (ingredientIndex) => {
    const updatedRecipe = { ...selectedRecipe };
    updatedRecipe.ingredients.splice(ingredientIndex, 1);
    updateRecipe(updatedRecipe);
  };

  const addIngredient = () => {
    const updatedRecipe = { ...selectedRecipe };

    if (!updatedRecipe.ingredients) {
      updatedRecipe.ingredients = [];
    }

    updatedRecipe.ingredients.push({
      name: newIngredient,
      quantity: newQuantity,
    });
    updateRecipe(updatedRecipe);

    setNewIngredient("");
    setNewQuantity("");
  };

  return (
    <div className="recipes-selected">
      <h2 className="recipes-selected__title">Receta seleccionada:</h2>
      {selectedRecipe === null ? (
        <p>Selecciona una receta</p>
      ) : (
        <>
          <img
            className="recipes-selected__image"
            src={selectedRecipe.imageUrl}
            alt={selectedRecipe.name}
          />
          <p className="recipes-selected__name">{selectedRecipe.name}</p>
          <p className="recipes-selected__people">
            Número de personas: {selectedRecipe.numPeople}
          </p>
          <table className="recipes-selected__table">
            <thead>
              <tr>
                <th>Ingredientes</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {selectedRecipe.ingredients &&
                selectedRecipe.ingredients.map((ingredient, index) => (
                  <tr key={index}>
                    <td>{ingredient.name}</td>
                    <td>{ingredient.quantity}</td>
                    <td>
                      <button
                        className="recipes-selected__button"
                        onClick={() => removeIngredient(index)}
                      >
                        ELIMINAR
                      </button>
                    </td>
                  </tr>
                ))}
              <tr>
                <td>
                  <input
                    className="recipes-selected__input"
                    placeholder="Nombre del ingrediente"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="recipes-selected__input"
                    placeholder="Cantidad"
                    value={newQuantity}
                    onChange={(e) => setNewQuantity(e.target.value)}
                  />
                </td>
                <td>
                  <button
                    className="recipes-selected__button"
                    onClick={addIngredient}
                  >
                    AÑADIR
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default RecipesSelected;
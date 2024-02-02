import React from "react";
import RecipesItemMemo from "../RecipesItem/RecipesItem"
import "./RecipesList.css";

const RecipesList = React.memo(() => {
    
    const [recipesList, setRecipesList] = React.useState([]);
    const [newRecipe, setNewRecipe] = React.useState({ name: "", numPeople: "", imageUrl: "" });

    const API_URL = "http://localhost:4000/recipes";

    React.useEffect(() => {
        getAllRecipesFromApi();
        
    }, []);
        
    const getAllRecipesFromApi = () => {
        
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
            setRecipesList(data)
            })
            .catch((error) => console.error("Error:", error));
    };

    /*const addNewRecipe = (event) => {
        event.preventDefault();

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
            // Limpiamos el formulario
            setNewRecipe({
            name: "",
            numPeople: "",
            imageUrl: "",
            });
        });
    };*/

    return (
    
        <div className="recipes-list">
            <h2 className="recipes-list__title">Listado de recetas:</h2>
            {recipesList.map(recipe =>
                <RecipesItemMemo
                key={recipe.id}
                recipe={recipe}
                ></RecipesItemMemo>)}
        </div>
    );
});

export default RecipesList;

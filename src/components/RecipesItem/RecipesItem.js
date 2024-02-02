import React from "react";
import "./RecipesItem.css";

const RecipesItem = (props) => { 

    return (
        <div className="recipes-list__item" key={props.recipe.id}>
            <img className="recipes-list__item-image" src={props.recipe.imageUrl} alt={props.recipe.name} />
            <div className="recipes-list__item-info">
                <p className="recipes-list__item-name">{props.recipe.name}</p>
                <p className="recipes-list__item-people">Número de personas: {props.recipe.numPeople}</p>
                <button className="recipes-list__delete-item-button" >ELIMINAR</button>
            </div>
        </div>
    );
}

const RecipesItemMemo = React.memo(RecipesItem);

export default RecipesItemMemo;
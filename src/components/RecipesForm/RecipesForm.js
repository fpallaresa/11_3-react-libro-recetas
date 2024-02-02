import React from "react";
import "./RecipesForm.css"

const RecipesForm = () => {

    // Referencias
    const NameRef = React.useRef();
    const numPeopleRef = React.useRef();
    const imageUrlRef = React.useRef();

    // Funciones
    const addNewRecipe = (event) => {
        event.preventDefault();
        console.log("Bloqueado el comportamiento por defecto del formulario");
    };

    return (
        <div className="recipes-form">
            <h2 className="recipes-form__title">Añade una nueva receta</h2>
            <form className="recipes-form__fields" onSubmit={(event) => addNewRecipe(event)}>
                <label className="recipes-form__label">Introduce un nombre</label>
                <input 
                    className="recipes-form__input" 
                    ref={NameRef} 
                    placeholder="Lentejas" 
                    type="text" 
                    name="Name" 
                    id="Name"
                    autoFocus={true}
                />
                <label className="recipes-form__label">Introduce el número de personas</label>
                <input 
                    className="recipes-form__input" 
                    ref={numPeopleRef} 
                    placeholder="4" 
                    type="number" 
                    name="numPeople" 
                    id="numPeople"
                />
                <label className="recipes-form__label">Introduce la url de la imagen</label>
                <input 
                    className="recipes-form__input" 
                    ref={imageUrlRef} 
                    placeholder="https://..." 
                    type="text" 
                    name="imageUrl" 
                    id="imageUrl"
                />
                <button className="recipes-form__submit-button" type="submit">AÑADIR RECETA</button>
            </form>
        </div>       
    );
}

export default RecipesForm;
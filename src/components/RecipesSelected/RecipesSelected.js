import "./RecipesSelected.css"

const RecipesSelected = () => {

    return (
        <div className="recipes-selected">
            <h2 className="recipes-selected__title">Receta seleccionada:</h2>
            <img className="recipes-selected__image" src="https://www.shutterstock.com/image-photo/homemade-chocolate-rolls-dessert-600w-368330465.jpg" alt=""/>
            <p className="recipes-selected__name">Tarta chocolate y galletas</p>
            <p className="recipes-selected__people">Número de personas: 4</p>
            <table className="recipes-selected__table">
                <thead>
                    <tr>
                        <th>Ingredientes</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Leche</td>
                        <td>500 ml</td>
                        <td><button className="recipes-selected__button">ELIMINAR</button></td>
                    </tr>
                    <tr>
                        <td>Chocolate para postres</td>
                        <td>450 grs</td>
                        <td><button className="recipes-selected__button">ELIMINAR</button></td>
                    </tr>
                    <tr>
                        <td><input/></td>
                        <td><input/></td>
                        <td><button className="recipes-selected__button">AÑADIR</button></td>
                    </tr>
                </tbody>
            </table>
        </div>     
    );
}

export default RecipesSelected;
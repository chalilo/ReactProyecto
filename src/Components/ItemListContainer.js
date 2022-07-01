import { Children } from "react";
import ItemCount from "./ItemCount";
import "./ItemListContainer.css"
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
    /*return(
        <div id="listaItems">
            <h2>{greeting}</h2>
            <div className="item">
                <h3>Ernie Ball Regular Slinky</h3>
                <img src="https://ruizcustomguitars.com/wp-content/uploads/2019/11/P02221.png" alt="Cuerdas de guitarra de la marca Ernie Ball"></img>
                <ItemCount stock={10} initial={2}/>
            </div>
            <div className="item">
                <h3>Ernie Ball Regular Slinky BASS</h3>
                <img src="https://ruizcustomguitars.com/wp-content/uploads/2020/05/P02836-510x510.png" alt="Cuerdas de bajo de la marca Ernie Ball"></img>
                <ItemCount stock={3} initial={1}/>
            </div>
        </div>
    )*/
    return(
        <ItemList/>
    )
}

export default ItemListContainer;
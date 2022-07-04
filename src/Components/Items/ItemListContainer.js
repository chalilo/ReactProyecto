import { Children } from "react";
import "./ItemListContainer.css"
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <h2>{greeting}</h2>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;
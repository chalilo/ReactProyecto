import "./ItemListContainer.css"
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
    return(
        <div id="itemListContainer">
            <h2>{greeting}</h2>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;
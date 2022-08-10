import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
    const [finalizado,setFinalizado] = useState(false)
    const onAdd = () => {
        setFinalizado(true)
    }
    return (
        <div id="itemDisplay">
            <img src={item.pictureURL} alt={item.alt} />
            <div id="itemDetail">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <p>{item.description}</p>
                
                {!finalizado ? <ItemCount item={item} stock={item.stock} initial={item.initial} onAdd={onAdd} /> : <Link to="/cart" id="finalizarCompra">Finalizar compra</Link>}
            </div>
        </div>
    )
}

export default ItemDetail;
import ItemCount from "./ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {
    const onAdd = (cantidad) => {
        console.log("SE AGREGO " + cantidad);
    }
    return (
        <div id="itemDisplay">
            <img src={item.pictureURL} alt={item.alt} />
            <div id="itemDetails">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <p>{item.description}</p>
                <ItemCount stock={item.stock} initial={item.initial} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail;
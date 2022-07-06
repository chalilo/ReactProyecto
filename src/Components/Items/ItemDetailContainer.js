import Items from "./Items";
import ItemDetail from "./ItemDetail";
import { useState } from "react";

const ItemDetailContainer = () => {
    const onAdd = (cantidad) =>{
        console.log("SE AGREGO "+cantidad);
    }
    const [vistaDetail, setVistaDetail] = useState(false)
    const item = Items[0]
    const task = new Promise((res) => {
        setTimeout(() => res(item), 2000)
    }).then(() => setVistaDetail(true))
    return (
        <div>
            <h2>Item Detail</h2>
            {vistaDetail
                ? <ItemDetail item={item}/>
                : <h3>Loading</h3>}
        </div>
    )
}

export default ItemDetailContainer;
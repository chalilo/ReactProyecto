import Items from "./Items";
import ItemDetail from "./ItemDetail";
import { useState } from "react";
import { useParams } from "react-router-dom";
import LoadingAnim from "../LoadingAnim/LoadingAnim";

const ItemDetailContainer = () => {
    const onAdd = (cantidad) =>{
        console.log("SE AGREGO "+cantidad);
    }
    const [vistaDetail, setVistaDetail] = useState(false)
    const {itemId} = useParams()
    const item = Items.find(item => item.id == itemId)
    const task = new Promise((res) => {
        setTimeout(() => res(item), 2000)
    }).then(() => setVistaDetail(true))
    return (
        <div>
            <h2>Item Detail</h2>
            {vistaDetail
                ? <ItemDetail item={item}/>
                : <LoadingAnim/>}
        </div>
    )
}

export default ItemDetailContainer;
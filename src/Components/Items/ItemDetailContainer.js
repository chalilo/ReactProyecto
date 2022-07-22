import Items from "./Items";
import { db } from "../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { useState } from "react";
import { useParams } from "react-router-dom";
import LoadingAnim from "../LoadingAnim/LoadingAnim";

const ItemDetailContainer = () => {
    const [vistaDetail, setVistaDetail] = useState(false)
    const [item,setItem] = useState({});
    const {itemId} = useParams()

    const productsCollection = collection(db,"Items");
    const refDoc = doc(productsCollection,itemId)

    getDoc(refDoc).then(result => {
        setItem({id: result.id,...result.data()})
        setVistaDetail(true)
    })

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
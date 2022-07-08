import { width } from "@mui/system"
import { useEffect, useState } from "react"
import Items from "./Items"
import Item from "./Item"
import { useParams } from "react-router-dom";
import LoadingAnim from "../LoadingAnim/LoadingAnim";

const ItemList = () => {
    const [vistaItems, setVista] = useState(false)
    const {categoryId} = useParams();
    const items = categoryId ? Items.filter(item => item.categoryId == categoryId):Items;
    const task = new Promise((res) => {
        setTimeout(() => res(items), 2000)
    }).then(() => setVista(true))

    return (
        <div>{vistaItems
            ? items.map(i => <div key={i.id}><Item item={i} /></div>)
            : <LoadingAnim/>
        }
        </div>
    )
}

export default ItemList;
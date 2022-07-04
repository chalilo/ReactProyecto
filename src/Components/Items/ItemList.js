import { width } from "@mui/system"
import { useEffect, useState } from "react"
import Items from "./Items"
import Item from "./Item"
import "./ItemList.css"

const ItemList = () => {
    const [vistaItems, setVista] = useState(false)
    const items = Items
    const task = new Promise((res) => {
        setTimeout(() => res(items), 2000)
    }).then(() => setVista(true))

    return (
        <div>{vistaItems
            ? items.map(i => <div key={i.id}><Item item={i} /></div>)
            : <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        }
        </div>
    )
}

export default ItemList;
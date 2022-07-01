import { width } from "@mui/system"
import { useEffect, useState } from "react"
import Item from "./Item"
import "./ItemList.css"

const ItemList = () => {
    const items = [
        {
            id: 0,
            title: "Cuerdas Ernie Ball Regular Slinky 10",
            price: 9000,
            pictureURL: "https://ruizcustomguitars.com/wp-content/uploads/2019/11/P02221.png",
            alt: "Imagen de cuerdas para guitarra de 6 cuerdas electrica Ernie Ball Regular Slinky 10",
            description : "Cuerdas de guitarra electrica marca Ernie Ball calibre 10 para guitarra de 6 cuerdas"
        },
        {
            id: 1,
            title: "Cuerdas Ernie Ball Regular Slinky 45 BASS",
            price: 31000,
            pictureURL: "https://ruizcustomguitars.com/wp-content/uploads/2019/11/P02221.png",
            alt: "Imagen de cuerdas para bajo de 5 cuerdas electrico Ernie Ball Regular Slinky 45",
            description : "Cuerdas de bajo electrico marca Ernie Ball calibre 45 para bajo de 5 cuerdas"
        },
        {
            id: 2,
            title: "Cuerdas Ernie Ball clasica nylon Enesto Palla",
            price: 6500,
            pictureURL: "https://ruizcustomguitars.com/wp-content/uploads/2019/11/P02409-510x510.png",
            alt: "Imagen de cuerdas para guitarra de 6 cuerdas clasica Ernie Ball de nylon",
            description : "Cuerdas de guitarra clasica marca Ernie Ball de nylon con bola"
        }
    ]
    const [vistaItems,setVista] = useState(false)

    const task = new Promise((res)=>{
        setTimeout(()=>res(items),2000)
    }).then(res => console.log(res))
    .then(()=>setVista(true))

    return(
        <div>{vistaItems
            ? items.map(i => <div key={i.id}><Item item={i} /></div>)
            : <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        }
        </div>
    )
}

export default ItemList;
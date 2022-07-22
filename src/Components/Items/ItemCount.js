import { useEffect, useState } from "react"
import "./ItemCount.css"
import { useContext } from "react";
import { contexto } from "../Contexto";

const ItemCount = ({item,stock,initial,onAdd}) => {
    const [itemCantidad,setItemCantidad] = useState(initial);
    const [stockVirt,setStock] = useState(stock);
    const resultado = useContext(contexto)
    const { carrito, agregarACarrito} = resultado
    const itemCountSuma = () =>{
        if (itemCantidad < stockVirt){
            setItemCantidad(itemCantidad + 1)
        } else{
            setItemCantidad(itemCantidad)
        }
    }
    const itemCountResta = () =>{
        if (itemCantidad > 1){
            setItemCantidad(itemCantidad - 1)
        } else{
            setItemCantidad(itemCantidad)
        }
    }
    const itemCountAdd =() =>{
        setStock(stockVirt - itemCantidad);
        if (itemCantidad != 0){
            agregarACarrito(item,itemCantidad)
            onAdd()
        } else{
        }
    }
    useEffect(()=>{
        if (stockVirt == 0){
            setItemCantidad(0)
            console.log("No queda mas stock");
        }else if(itemCantidad <= stockVirt){
            setItemCantidad(itemCantidad)
        }else if(stockVirt >= initial && itemCantidad > initial){
            setItemCantidad(initial)
        }else {
            setItemCantidad(1)
            console.log("Queda poco stock (menos del 10%)");
        }
    },[stockVirt])
    return(
        <div className="itemCount">
            <div className="countChanger">
                <button onClick={()=>itemCountSuma()}>+</button>
                <p>{itemCantidad}</p>
                <button onClick={()=>itemCountResta()}>-</button>
            </div>
            <button onClick={()=>itemCountAdd()}>Agregar a carrito</button>
            <p>Stock: {stockVirt}</p>
        </div>
    )
}

export default ItemCount;
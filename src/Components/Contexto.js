import { createContext, useState } from "react"

export const contexto = createContext([]);
const { Provider } = contexto;

const Contexto = ({ children }) => {
    const [carrito, alterarCarrito] = useState([]);

    const agregarACarrito = (itemA,cantidad) => {
        alterarCarrito([...carrito,])
        if (estaEnCarrito(itemA.id)){
            let itemEnCarro = carrito.find(item=>item.id == itemA.id)
            itemEnCarro.qty = cantidad + itemEnCarro.qty
            const carritoFiltrado = carrito.filter(item=>item.id !== itemA.id)
            alterarCarrito([...carritoFiltrado,itemEnCarro])
            console.log(carrito);
        } else{
            let itemAAgregar = {id: itemA.id, name: itemA.title, qty: cantidad}
            alterarCarrito([...carrito,itemAAgregar])
        }
    }

    const eliminarDeCarrito = (itemId) => {
        alterarCarrito(carrito.filter(item => item.id !== itemId))
    }

    const estaEnCarrito = (itemId) => {
        return carrito.find(item => item.id == itemId);
    }

    const clear =()=>{
        alterarCarrito([])
    }
    return (
        <Provider value={{ carrito, agregarACarrito, eliminarDeCarrito, clear}}>
            {children}
        </Provider>
    )
}
export default Contexto
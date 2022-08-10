import { createContext, useState, useEffect } from "react"

export const contexto = createContext([]);
const { Provider } = contexto;

const Contexto = ({ children }) => {
    const [carrito, alterarCarrito] = useState([]);

    let itemsEnCarrito = 0;
    if (carrito.length >= 1) {
        carrito.forEach(obj => {
            itemsEnCarrito = itemsEnCarrito + obj.qty
        });
    }
    useEffect(() => {
        itemsEnCarrito += ([carrito.map(obj => obj.qty)]).reduce((a, b) => {
            return a + b;
        }, 0)
    }, [carrito])
    
    const agregarACarrito = (itemA,cantidad) => {
        if (estaEnCarrito(itemA.id)){
            const carritoAlterado = carrito.map(obj =>{
                if (obj.id === itemA.id){
                    obj.qty = obj.qty + cantidad
                    return obj
                } else return obj
            })
            alterarCarrito([...carritoAlterado]);
        } else{
            let itemAAgregar = {id: itemA.id, name: itemA.title, qty: cantidad, priceUnit: itemA.price, pictureURL : itemA.pictureURL}
            alterarCarrito([...carrito,itemAAgregar])
        }
    }

    const eliminarDeCarrito = (itemId) => {
        alterarCarrito(carrito.filter(item => item.id !== itemId))
    }

    const estaEnCarrito = (itemId) => {
        return carrito.some(item => item.id === itemId);
    }
    const clear =()=>{
        alterarCarrito([])
    }
    return (
        <Provider value={{ carrito, agregarACarrito, eliminarDeCarrito, clear, itemsEnCarrito}}>
            {children}
        </Provider>
    )
}
export default Contexto
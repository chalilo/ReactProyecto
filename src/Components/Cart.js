import { useContext, useEffect } from "react";
import { contexto } from "./Contexto";
import Items from "./Items/Items";
import { NavLink,Link } from "react-router-dom";

const Cart = () => {
    const resultado = useContext(contexto)
    const { carrito, agregarACarrito, eliminarDeCarrito, eliminarUno, estaEnCarrito } = resultado
    let costoCompra = 0;
    carrito.forEach(obj => {
        let costoItem = obj.priceUnit * obj.qty
        costoCompra = costoCompra + costoItem
    })
    if (carrito.length >= 1){
        return (
            <>
                <h2>Cart</h2>
    
                {carrito.map(producto =>
                    <div key={producto.id}>
                        <h2>{producto.name}</h2>
                        <img src={producto.pictureURL} />
                        <p>Cantidad: {producto.qty}</p>
                        <button onClick={()=>eliminarDeCarrito(producto.id)}>Eliminar de Carrito</button>
                        <p>Precio de unidad: ${producto.priceUnit}</p>
                    </div>)}
                <p>Precio total: ${costoCompra}</p>
            </>
        )
    } else{
        return (
            <Link to="/">Tu carrito esta vacio, revisa nuestro catalogo aqui</Link>
        )
    }
}
export default Cart;
import { useContext } from "react";
import { contexto } from "./Contexto";

const Cart = () => {
    const resultado = useContext(contexto)
    const { carrito, agregarACarrito, eliminarDeCarrito, estaEnCarrito } = resultado
    console.log(resultado);
    console.log(carrito);
    return (
        <>
            <h2>Cart</h2>
        </>
    )
}
export default Cart;
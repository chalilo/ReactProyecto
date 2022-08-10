import { useContext } from "react";
import { contexto } from "./Contexto";
import { Link } from "react-router-dom";
import './Cart.css'
import Swal from "sweetalert2";

const Cart = () => {
    const resultado = useContext(contexto)
    const { carrito, eliminarDeCarrito, clear } = resultado
    let costoCompra = 0;
    carrito.forEach(obj => {
        let costoItem = obj.priceUnit * obj.qty
        costoCompra = costoCompra + costoItem
    })
    const alertaSwalEliminar = (a) => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Vas a eliminar el producto de tu carrito",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#a01c4b',
            cancelButtonColor: '#444',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'No, me arrepenti'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    'Se borro el item de tu carrito',
                    'success'
                )
                eliminarDeCarrito(a)
            }
        })
    }
    if (carrito.length >= 1) {
        return (
            <div id="cartView">
                <h2>Carrito</h2>

                {carrito.map(producto =>
                    <div className="cartItem" key={producto.id}>
                        <h2>{producto.name}</h2>
                        <img src={producto.pictureURL} alt={'Imagen de ' + producto.name} />
                        <p>Cantidad: {producto.qty}</p>
                        <p>Precio de unidad: ${producto.priceUnit}</p>
                        <button onClick={() => alertaSwalEliminar(producto.id)}>Eliminar de carrito</button>
                    </div>)}
                <p>Precio total: ${costoCompra}</p>
                <div id="cartControls">
                    <button onClick={() => clear()}>Vaciar carrito</button>
                    <Link to="/checkout"><button>Finalizar compra</button></Link>
                </div>
            </div>
        )
    } else {
        return (
            <div id="cartView">
                <Link to="/" id="emptyCart">Tu carrito esta vacio, revisa nuestro catalogo aqui</Link>
            </div>
        )
    }
}
export default Cart;
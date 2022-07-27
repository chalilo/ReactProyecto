import { useContext, useRef, useState } from "react"
import { contexto } from "./Contexto"
import { serverTimestamp, addDoc, collection } from "firebase/firestore"
import { db } from "./firebase/firebase"
import LoadingAnim from "./LoadingAnim/LoadingAnim"

const Checkout = () => {
    const resultado = useContext(contexto)
    const { carrito, clear } = resultado;
    let costoCompra = 0
    carrito.forEach(obj => {
        const costoItem = obj.priceUnit * obj.qty
        costoCompra = costoCompra + costoItem
    })
    const [idVenta, setIdVenta] = useState("")
    const [estadoPago, setEstadoPago] = useState(false)
    const [procesando, setProcesando] = useState(false)

    const SubmitOrder = (order) => {
        const ordersCollection = collection(db, "orders")

        addDoc(ordersCollection, order).then((res) => {
            setIdVenta(res.id)
            setEstadoPago(true)
            clear()
        })
    }

    const inpNombre = useRef(null)
    const inpTelefono = useRef(null)
    const inpCorreo = useRef(null)
    const procederPago = (evt) => {
        evt.preventDefault()
        if (inpNombre.current.value && inpTelefono.current.value && inpCorreo.current.value) {
            setProcesando(true)
            const itemsCheckout = carrito.map((obj) => { return { "id": obj.id, "title": obj.name, "price": obj.priceUnit, "qty": obj.qty } })
            const order = { buyer: { name: inpNombre.current.value, phone: inpTelefono.current.value, email: inpCorreo.current.value }, items: [...itemsCheckout], date: serverTimestamp(), total: costoCompra }
            console.log(order);
            SubmitOrder(order)
        } else {
            console.log("Alguna de las casillas no se relleno correctamente, revisa e intenta nuevamente");
        }
    }
    return (
        <>
            {!procesando
                ? <form>
                    <label htmlFor="nombre">Nombre</label>
                    <input ref={inpNombre} name="nombre" type="text" />
                    <label htmlFor="telefono">Telefono de contacto</label>
                    <input ref={inpTelefono} name="telefono" type="text" />
                    <label htmlFor="correo">Correo</label>
                    <input ref={inpCorreo} name="correo" type="text"></input>
                    <button onClick={procederPago}>Terminar pago</button>
                </form>
                : <>
                    {estadoPago ? <><h2>Tu pedido fue realizado con exito</h2>
                        <h3>Para tu seguridad, guarda este numero como comprobante: <strong>{idVenta}</strong></h3></> : <LoadingAnim/>}
                </>
            }
        </>
    )
}

export default Checkout
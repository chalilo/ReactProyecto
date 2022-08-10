import { useEffect, useState } from "react"
import Item from "./Item"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LoadingAnim from "../LoadingAnim/LoadingAnim";
import { db } from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemList = () => {
    const [productos, setProductos] = useState([]);
    const [vistaItems, setVista] = useState(false)

    const { categoryId } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, "Items")
        const q = query(productsCollection, where("categoryId", "==", (categoryId ? categoryId : !categoryId)))
        setVista(false)
        getDocs(categoryId ? q : productsCollection)
            .then((result) => {
                const lista = result.docs.map(producto => {
                    return {
                        id: producto.id,
                        ...producto.data()
                    }
                });
                setProductos(lista);
                setVista(true)
            })
    }, [categoryId])

    return (
        <div id="itemList">{vistaItems
            ? (productos.length >= 1 ? productos.map(i => <div className="itemDisplay" key={i.id}><Item item={i} /></div>)
            : <Link to="/" id="categoriaVacia">Categoria vacia, revisa el resto de nuestra tienda</Link>)
            : <LoadingAnim />
        }
        </div>
    )
}

export default ItemList;
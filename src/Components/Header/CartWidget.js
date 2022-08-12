import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors';
import { useContext} from 'react';
import { contexto } from '../Contexto';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    let { carrito, itemsEnCarrito } = useContext(contexto);
    return (
        <Link to="/ReactProyecto/cart" id='cartLink'>
            <div id="cartWidget" style={{ display: !(carrito.length >= 1) ? "none" : "flex" }}>
                <ShoppingCartIcon fontSize='large' sx={{ color: grey[50] }} /><p>{itemsEnCarrito}</p>
            </div>
        </Link>
    )
}

export default CartWidget;
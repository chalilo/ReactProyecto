import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors';


const CartWidget = () => {
    let contenidoCarro = 0;
    return(
        <div id="cartWidget">
            <a href="https://www.youtube.com/"><ShoppingCartIcon fontSize='large' sx={{ color: grey[50] }}/><p>{contenidoCarro}</p></a>
        </div>
        )
}

export default CartWidget;
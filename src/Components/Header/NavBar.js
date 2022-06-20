import './Header.css';
import logoTienda from './../../logo.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { grey } from '@mui/material/colors';


const NavBar = ({ logeo }) => {
    logeo("Componente hijo")
    return (
        <header>
            <div id='brand'>
                <img src={logoTienda} alt="Logo de la tienda" />
                <h1>Chalilo Encordado</h1>
            </div>
            <div class="dropdown" id='dropMenu'>
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                </button>
                <ul class="dropdown-menu dropdown-menu-dark bg-secondary" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="https://www.youtube.com/">Cuerdas de guitarra</a></li>
                    <li><a class="dropdown-item" href="https://www.youtube.com/">Cuerdas de bajo</a></li>
                    <li><a class="dropdown-item" href="https://www.youtube.com/">Herramientas</a></li>
                </ul>
            </div>
            <a href="https://www.youtube.com/" id='shoppingCart'><ShoppingCartIcon fontSize='large' sx={{ color: grey[50] }}/></a>
        </header>
    );
}

export default NavBar;

import './NavBar.css';
import logoTienda from './../../logo.svg';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const NavBar = (/*{ logeo }*/) => {
    const categories = [
        {name:"Cuerdas de guitarra",id:0,route:"/category/guitarra"},
        {name:"Cuerdas de bajo",id:1,route:"/category/bajo"},
        {name:"Herramientas",id:2,route:"/category/herramientas"}
    ]
    return (
        <header>
            <div id='brand'>
                <Link to={"/"}><img src={logoTienda} alt="Logo de la tienda" /></Link>
                <h1>Chalilo Encordado</h1>
            </div>
            <div className="dropdown" id='dropMenu'>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                </button>
                <ul className="dropdown-menu dropdown-menu-dark bg-secondary" aria-labelledby="dropdownMenuButton1">
                    {categories.map((category) => <Link key={category.id} to={category.route} className="dropdown-item">{category.name}</Link>)}
                </ul>
            </div>
            <CartWidget/>
        </header>
    );
}

export default NavBar;

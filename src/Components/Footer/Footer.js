import logoTienda from './../../logo.svg';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
        <p>Chalilo Encordado</p>
        <Link to='/ReactProyecto'><img src={logoTienda} alt='Logo de tienda'/></Link>
        </footer>
    )
}

export default Footer
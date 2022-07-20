import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors';
import { useContext, useEffect, useState } from 'react';
import { contexto } from '../Contexto';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    let { carrito } = useContext(contexto);
    let itemsEnCarrito = 0;
    if (carrito.length >= 1) {
        carrito.forEach(obj => {
            itemsEnCarrito = itemsEnCarrito + obj.qty
        });
    }
    useEffect(() => {
        itemsEnCarrito += ([carrito.map(obj => obj.qty)]).reduce((a, b) => {
            return a + b;
        }, 0)
    }, [carrito])
    return (
        <Link to="/cart">
            <div id="cartWidget" style={{ display: !(carrito.length >= 1) ? "none" : "flex" }}>
                <ShoppingCartIcon fontSize='large' sx={{ color: grey[50] }} /><p>{itemsEnCarrito}</p>
            </div>
        </Link>
    )
}

export default CartWidget;
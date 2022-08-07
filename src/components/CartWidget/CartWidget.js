import React from 'react';
import cart from '../../assets/cart.svg'
import { useContext } from "react";
import { contexto } from '../CartContext/CartContext';

const CartIcon = () => {

    const { quantity } = useContext(contexto);

    return (
        <>
            <img style={styles.carrito} src={cart} alt="cart" />
            {quantity === 0 ? null : <span>{quantity}</span>}
        </>
    )
}

export default CartIcon;

const styles = {
    carrito: {
        width: 20,
    }
}
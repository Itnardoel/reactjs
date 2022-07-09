import React from 'react';
import cart from '../assets/cart.svg'

const CartIcon = ({cantidad}) => {
    return (
        <>
            <img style={styles.carrito} src={cart} alt="cart" />
            <span>{cantidad}</span>
        </>
    )
}

export default CartIcon;

const styles = {
    carrito: {
        width: 20,
    }
}
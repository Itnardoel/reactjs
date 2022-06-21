import cart from '../assets/cart.svg'

const CartIcon = () => {
    return (
        <img style={styles.carrito} src={cart} alt="cart" />
    )
}

export default CartIcon;

const styles = {
    carrito: {
        width: 20,
    }
}
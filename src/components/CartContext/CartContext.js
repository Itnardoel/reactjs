import React, { useState, useEffect, createContext } from 'react'

export const contexto = createContext();
const { Provider } = contexto;

const CustomProvider = ({ children }) => {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('Cart')) || []);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const addItem = (item, quantity) => {

        if(isInCart(item.id)){
            const aux = [...items];
            const found = aux.find(i => i.id === item.id);
            found.quantity += quantity;

            if(found.quantity > found.stock) {
                found.quantity = found.stock
            }
            
            setItems(aux);
        } else {
            const newItem = {...item, quantity: quantity} 
            setItems([...items, newItem]);
        }
    }

    const removeItem = (itemId) => {
        setItems(items.filter((item) => item.id !== itemId));
    }

    const clear = () => {
        setItems([]);
    }

    const isInCart = (id) => {
        return(items.some((item) => item.id === id));
    }

    const getQuantity = () => {
        let cartQuantity = 0;
        items.forEach(item => cartQuantity += item.quantity);
        setQuantity(cartQuantity);
    }

    const getTotalPrice = () => {
        let total = 0;
        items.forEach(item => total += item.price*item.quantity);
        setTotal(total);
    }

    const setLocalStorage = () => {
        localStorage.setItem('Cart', JSON.stringify(items));
    }

    useEffect(() => {

        setLocalStorage();
        getQuantity();
        getTotalPrice();

    },[items])

  return (
    <Provider value={{items,addItem,removeItem,clear,quantity,total}}>
        {children}
    </Provider>
  )
}

export default CustomProvider
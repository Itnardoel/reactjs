import React, { useState, useEffect, createContext } from 'react'

export const contexto = createContext();
const { Provider } = contexto;

const CustomProvider = ({ children }) => {

    const [items, setItems] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const addItem = (item, quantity) => {

        if(isInCart(item.id)){
            console.log("Este item ya estaba en el carrito")
            const aux = [...items];
            const found = aux.find(i => i.id === item.id);
            found.quantity += quantity;

            if(found.quantity > found.stock) {
                found.quantity = found.stock
            }
            
            setItems(aux);
        } else {
            console.log(`Añadiste ${quantity} ${item.title} al carrito`);
            const newItem = {...item, quantity: quantity} //agrego quantity al objeto
            setItems([...items, newItem]); //"push" del contenido
        }
    }

    const removeItem = (itemId) => {
        console.log(`Borraste el item de id=${itemId}`);
        setItems(items.filter((item) => item.id !== itemId));
    }

    const clear = () => {
        console.log("Borraste todos los items");
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

    useEffect(() => {
        getQuantity();
        getTotalPrice();
    },[items])
    
    console.log(items);

  return (
    <Provider value={{items,addItem,removeItem,clear,quantity,total}}>
        {children}
    </Provider>
  )
}

export default CustomProvider
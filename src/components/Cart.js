import React from 'react'
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { contexto } from './CartContext';
import CartRender from './CartRender';
import { db } from "./Firebase";
import { doc, addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore";
import Form from './Form';

const Cart = () => {

  const { items, total } = useContext(contexto)
  const [idVenta, setIdVenta] = useState("")

  const checkout = (values) => {

    const salesCollection = collection(db, "ventas");
    addDoc(salesCollection, {
      buyer: values,
      items: items.map((item) => {
        let rObj = {id: item.id, title: item.title, price: item.price};
        return rObj;
      }),
      date: serverTimestamp(),
      total: total,
    })
    .then((response) => {
      setIdVenta(response.id);
      console.log(`Gracias por tu compra, tu id es: ${idVenta}`);
    });

    items.forEach(item => {
      const updateCollection = doc(db, "productos", item.id);
      updateDoc(updateCollection, {stock: item.stock - item.quantity})
    });
  }
 
  return (
    <>
      {items.length === 0
        ? <h1 style={styles.texto}>No agregaste ningun producto, hacelo desde <Link to={'/'}>aca</Link></h1>
        : <>
            <CartRender />
            <Form checkout={checkout}/> 
          </>
      }
    </>
  )
}

export default Cart

const styles = {
  texto: {
    textAlign: 'center',
  }
}
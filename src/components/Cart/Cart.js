import React from 'react'
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { contexto } from '../CartContext/CartContext';
import CartRender from '../CartRender/CartRender';
import { db } from "../Firebase/Firebase";
import { doc, addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore";
import Form from '../Form/Form';

const Cart = () => {

  const { items, total, clear } = useContext(contexto)
  const [idVenta, setIdVenta] = useState("")

  const checkout = (buyerData) => {

    const salesCollection = collection(db, "ventas");
    addDoc(salesCollection, {
      buyer: buyerData,
      items: items.map((item) => {
        let rObj = {id: item.id, title: item.title, price: item.price};
        return rObj;
      }),
      date: serverTimestamp(),
      total: total,
    })
    .then((response) => {
      setIdVenta(response.id);

      items.forEach(item => {
        const updateCollection = doc(db, "productos", item.id);
        updateDoc(updateCollection, {stock: item.stock - item.quantity})
      });
    })
    .finally(() => {
      clear();
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
import React from 'react'
import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { contexto } from '../CartContext/CartContext';
import CartRender from '../CartRender/CartRender';
import { db } from "../Firebase/Firebase";
import { doc, addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore";
import Form from '../Form/Form';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Cart = () => {

  const { items, total, clear } = useContext(contexto)

  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

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
      MySwal.fire({
        title: 'Gracias por tu compra',
        text: `Tu orden de compra es: ${response.id}`,
        icon: 'success',
        confirmButtonText: 'Ok',
      })
      items.forEach(item => {
          const updateCollection = doc(db, "productos", item.id);
          updateDoc(updateCollection, {stock: item.stock - item.quantity})
        });
      })
      .finally(() => {
        clear();
        navigate('/');
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
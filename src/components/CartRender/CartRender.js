import React from 'react'
import { useContext } from "react";
import { contexto } from '../CartContext/CartContext';
import trashIcon from '../../assets/trash.svg'

const CartRender = () => {

    const { items, removeItem, clear, total } = useContext(contexto)

  return (
    <>
        <table style={styles.tabla}>
            <thead>
                <tr>
                <th style={styles.tablaHeader}></th>
                <th style={styles.tablaHeader}>Item</th>
                <th style={styles.tablaHeader}>Precio</th>
                <th style={styles.tablaHeader}>Cantidad</th>
                <th style={styles.tablaHeader}>Subtotal</th>
                <th style={styles.tablaHeader}>Borrar</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => {
                return (
                    <tr key={item.id}>
                    <td style={styles.itemLista}>{<img style={styles.imagen} src={item.pictureUrl} alt={item.title} />}</td>
                    <td style={styles.texto}>{item.title}</td>
                    <td style={styles.texto}>${item.price}</td>
                    <td style={styles.texto}>{item.quantity}</td>
                    <td style={styles.texto}>${item.price*item.quantity}</td>
                    <td style={styles.texto}><button onClick={() => removeItem(item.id)}><img src={trashIcon} alt='Eliminar'/></button></td>
                    </tr>
                )
                })}
            </tbody>
            </table>
            <button style={styles.boton} onClick={clear}>Vaciar el carrito</button>
            <h2 style={styles.texto}>Total ${total}</h2>
    </>
  )
}

export default CartRender

const styles = {
    tabla: {
      border: '2px solid black',
      width: '100%'
    },
    tablaHeader: {
      borderBottom: '1px solid black',
    },
    itemLista: {
      width: '20%',
      textAlign: 'center',
    },
    imagen: {
      width: "50%",
    },
    texto: {
      textAlign: 'center',
    },
    boton: {
      margin: '0.5rem 0',
      border: '2px solid #555555',
      color: 'black',
      padding: '8px 16px',
      textAlign: 'center',
      textDecoration: 'none',
      fontSize: '16px',
      transitionDuration: '0.4s',
      cursor: 'pointer',
      backgroundColor: 'white',
    }
  }
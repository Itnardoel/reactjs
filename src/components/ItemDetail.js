import React from 'react';
import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {

  const [added, setAdded] = useState(false);

  const onAdd = (quantityToAdd) => {
    console.log(`Agregaste ${quantityToAdd} al carrito`);
    setAdded(true);
  }

  return (
    <div style={styles.container}>
        <img style={styles.imagen} src={item.pictureUrl} alt={item.title} />
        <div style={styles.caja}>
        <h2>{item.title}</h2>
        <p style={styles.texto}>{item.description}</p>
        <p>${item.price}</p>
        <p>Stock disponible: {item.stock}</p>
        {added ? <Link to={"/cart"}><button>Terminar mi compra</button></Link> : <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>}
        </div>
    </div>
  )
}

export default ItemDetail

const styles = {
    container: {
        display: 'flex',
        margin: '2rem',
        padding: '0 25px',
        alignItems: 'center',
    },
    caja: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    texto: {
        whiteSpace: 'pre-wrap',
        padding: '1rem',
    },
    imagen: {
        width: "25%",
        height: 'auto',
        objectFit: 'contain',
      },
}
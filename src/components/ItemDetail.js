import React from 'react';
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { contexto } from './CartContext';

const ItemDetail = ({ item }) => {

  const { addItem } = useContext(contexto);

  const [added, setAdded] = useState(false);

  const onAdd = (quantityToAdd) => {
    setAdded(true);
    addItem(item, quantityToAdd);
  }

  return (
    <div style={styles.container}>
        <img style={styles.imagen} src={item.pictureUrl} alt={item.title} />
        <div style={styles.caja}>
        <h2>{item.title}</h2>
        <p style={styles.texto}>{item.description.replaceAll("\\n", "\n")}</p>
        <p>Precio: ${item.price}</p>
        <p>Stock disponible: {item.stock}</p>
        {added ? <Link to={"/cart"}><button>Terminar mi compra</button></Link> : 
          item.stock === 0 ? null : <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>}
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
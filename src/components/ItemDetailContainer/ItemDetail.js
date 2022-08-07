import React from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { contexto } from '../CartContext/CartContext';

const ItemDetail = ({ item }) => {

  const { addItem } = useContext(contexto);

  const [added, setAdded] = useState(false);
  const [isHover, setIsHover] = useState(false);
  
  const handleMouseEnter = () => {
      setIsHover(true);
    };
    const handleMouseLeave = () => {
      setIsHover(false);
    };

  const onAdd = (quantityToAdd) => {
    setAdded(true);
    addItem(item, quantityToAdd);
  }

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
    boton: {
      marginBottom: '1rem',
      border: '2px solid #555555',
      color: isHover ? 'white' : 'black',
      padding: '16px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      fontSize: '16px',
      margin: '4px 2px',
      transitionDuration: '0.4s',
      cursor: 'pointer',
      backgroundColor: isHover ? '#555555' : 'white',
    }
}

  return (
    <div style={styles.container}>
        <img style={styles.imagen} src={item.pictureUrl} alt={item.title} />
        <div style={styles.caja}>
        <h2>{item.title}</h2>
        <p style={styles.texto}>{item.description.replaceAll("\\n", "\n")}</p>
        <p>Precio: ${item.price}</p>
        <p>Stock disponible: {item.stock}</p>
        {added ? <Link to={"/cart"}><button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={styles.boton}>Terminar mi compra</button></Link> : 
          item.stock === 0 ? null : <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>}
        </div>
    </div>
  )
}

export default ItemDetail
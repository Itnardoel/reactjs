import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {

  const [isHover, setIsHover] = useState(false);
  
  const handleMouseEnter = () => {
      setIsHover(true);
    };
    const handleMouseLeave = () => {
      setIsHover(false);
    };
    
    const styles = {
      card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: '0.5rem',
        boxShadow: '0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)',
      },
      imagen: {
        width: "100%",
        borderRadius: '0.5rem 0.5rem 0 0',
        objectFit: 'cover',
        height: 'max(10rem, 35vh)',
        maxHeight: 'max(10rem, 35vh)',
        aspectRatio: 4/3,
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
    <>
      <div style={styles.card}>
        <img style={styles.imagen} src={item.pictureUrl} alt={item.title} />
        <h2>{item.title}</h2>
        <p>${item.price}</p>
        <Link to={`/item/${item.id}`}><button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={styles.boton}>Ver detalles</button></Link>
      </div>
    </>
  )
}

export default Item
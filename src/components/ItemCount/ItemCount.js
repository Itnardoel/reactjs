import React from 'react';
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const [isHover, setIsHover] = useState(false);
  
    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const sumar = () => {
        if (contador < stock) {
            setContador( contador + 1);
        } if (contador >= stock) {
            return;
        }
    }

    const restar = () => {
        if (contador > 1) {
            setContador( contador - 1);
        }
    }

    const styles = {
        botones: {
            display: 'flex',
            alignItems: 'center',
            gap: 5,
        },
        caja: {
            width: 120,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        boton: {
            marginBottom: '1rem',
            border: '2px solid #555555',
            color: isHover ? 'white' : 'black',
            padding: '8px 16px',
            textAlign: 'center',
            textDecoration: 'none',
            fontSize: '16px',
            margin: '4px 2px',
            transitionDuration: '0.4s',
            cursor: 'pointer',
            backgroundColor: isHover ? '#555555' : 'white',
        },
        boton2: {
            marginBottom: '1rem',
            border: '2px solid #555555',
            textAlign: 'center',
            textDecoration: 'none',
            margin: '4px 2px',
            transitionDuration: '0.4s',
            cursor: 'pointer',
        }
    }

    return (
        <>
            <div style={styles.caja}>
                <div style={styles.botones}>
                    <button onClick={restar} style={styles.boton2}>-</button>
                    <h4>{contador}</h4>
                    <button onClick={sumar} style={styles.boton2}>+</button>
                </div>
                <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={styles.boton} onClick={() => {
                    if (stock >= 1){
                        onAdd(contador);
                    }
                }}>
                    Agregar al carrito
                </button>
            </div>
        </>
    )
}

export default ItemCount;
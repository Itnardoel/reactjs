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
        }
    }

    return (
        <>
            <div style={styles.caja}>
                <div style={styles.botones}>
                    <button onClick={restar}>-</button>
                    <p>{contador}</p>
                    <button onClick={sumar}>+</button>
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
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial);

    const sumar = () => {
        if (contador < stock) {
            setContador( contador + 1);
        } if (contador >= stock) {
            alert("No hay stock");
        }
    }

    const restar = () => {
        if (contador > 1) {
            setContador( contador - 1);
        }
    }

    // Otra forma que se me ocurrio hacerlo
    // const confirmar = () => {
    //     if (stock >= 1) {
    //         onAdd(contador);
    //         console.log(contador);
    //     }
    // }

    return (
        <>
            <div style={styles.caja}>
                <div style={styles.botones}>
                    <button onClick={restar}>-</button>
                    <p>{contador}</p>
                    <button onClick={sumar}>+</button>
                </div>
                <button onClick={() => {
                    if (stock >= 1){
                        onAdd(contador);
                        console.log(contador) //para saber si me toma bien el stock agregado
                    }
                }}>
                    Agregar al carrito
                </button>
            </div>
        </>
    )
}

export default ItemCount;

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
    }
}
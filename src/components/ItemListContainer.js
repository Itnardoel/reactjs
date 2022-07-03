import { useState, useEffect} from 'react';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({catalogo}) => {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getItems = async () => {
            try {
                const response = await fetch("data.json");
                const data = await response.json();
                setItems(data);
            }
            catch (err) {
                setError(true);
                console.log(err);
            }
            finally {
                setLoading(false);
            }
        }
        setTimeout(getItems, 2000);
    }, [])
    
    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} al carrito`);
    }
    
    return (
        <>
            <h2>{catalogo}</h2>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            {loading ? <p>...Loading</p> : 
                error ? <p>Error</p> :
                    <ItemList items={items}/>} 
        </>
    )
}

export default ItemListContainer;
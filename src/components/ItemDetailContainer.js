import React from 'react';
import { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getItem = async () => {
            try {
                const response = await fetch("data.json");
                const data = await response.json();
                setItem(data);
            }
            catch (err) {
                setError(true);
                console.log(err);
            }
            finally {
                setLoading(false);
            }
        }
        setTimeout(getItem, 2000);
    }, [])

  return (
    <>
        {loading ? <p>...Loading</p> : 
            error ? <p>Error</p> :
                <ItemDetail item={item}/>}
    </>
  )
}

export default ItemDetailContainer
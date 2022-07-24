import React from 'react';
import { useState, useEffect, CSSProperties } from 'react';
import ItemDetail from './ItemDetail';
import  { useParams } from 'react-router-dom'
import PuffLoader from "react-spinners/PuffLoader";
import { db } from "./Firebase";
import { getDoc, collection, doc } from "firebase/firestore";


const ItemDetailContainer = () => {

    const override: CSSProperties = {
        display: "block",
        margin: "1rem auto",
    };

    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const productCollection = collection(db, "productos");
        const refDoc = doc(productCollection, itemId)
        getDoc(refDoc)
        .then(response => {
            const data = {
                id: response.id,
                ...response.data(),
            }
            setItem(data);
        })
        .catch(err => {
            setError(true);
            console.log(err);
        })
        .finally(() => setLoading(false))

        // const getItem = async () => {
        //     try {
        //         const response = await fetch('http://localhost:3000/data.json');
        //         const data = await response.json();
        //         setItem(data[itemId]);
        //     }
        //     catch (err) {
        //         setError(true);
        //         console.log(err);
        //     }
        //     finally {
        //         setLoading(false);
        //     }
        // }
        // setTimeout(getItem, 2000);
    }, [])

  return (
    <>
        {loading ? <PuffLoader color={"#22e52a"} cssOverride={override} size={150} /> : 
            error ? <p>Error</p> :
                <ItemDetail item={item}/>}
    </>
  )
}

export default ItemDetailContainer
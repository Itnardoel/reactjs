import React from 'react';
import { useState, useEffect, CSSProperties } from 'react';
import ItemList from "./ItemList";
import  { useParams } from 'react-router-dom';
import PuffLoader from "react-spinners/PuffLoader";
import { db } from "./Firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {
    
    const override: CSSProperties = {
        display: "block",
        margin: "1rem auto",
    };

    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        setLoading(true);

        const productCollection = collection(db, "productos");
        const URL = categoryId
            ? query(productCollection, where('category', '==', categoryId))
            : productCollection
        getDocs(URL)
        .then(response => {
            const data = response.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setItems(data);
        })
        .catch(err => {
            setError(true);
            console.log(err);
        })
        .finally(() => setLoading(false))
        
        // const getItems = async () => {
        //     try {
        //         const response = await fetch('http://localhost:3000/data.json');
        //         const data = await response.json();
        //         categoryId ? setItems(data.filter(item => item.category.includes(categoryId))) : setItems(data)
        //     }
        //     catch (err) {
        //         setError(true);
        //         console.log(err);
        //     }
        //     finally {
        //         setLoading(false);
        //     }
        // }
        // setTimeout(getItems, 2000);
        
    }, [categoryId])
    
    return (
        <>
            <h2>{greeting}</h2>
            {loading ? <PuffLoader color={"#22e52a"} cssOverride={override} size={150} /> : 
                error ? <p>Error</p> :
                    <ItemList items={items}/>} 
        </>
    )
}

export default ItemListContainer;
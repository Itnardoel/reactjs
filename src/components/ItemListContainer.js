import React from 'react';
import { useState, useEffect} from 'react';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import  { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

    const { categoryName } = useParams();
    console.log(categoryName)
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        
        // const URL = categoryName
        //     ? JSON.parse("data.json").filter(item => item.category.includes(categoryName))
        //     : "data.json";

        // if (categoryName){
        //     fetch("data.json")
        //         .then(response => response.json())
        //         .then(data => setItems(data.filter(item => item.category.includes(categoryName))))
        //         .catch(err => console.log(err))
        //         .finally(() => setLoading(false))
        // } else {
        //     fetch("data.json")
        //         .then(response => response.json())
        //         .then(data => setItems(data))
        //         .catch(err => console.log(err))
        //         .finally(() => setLoading(false))
        // }

        const getItems = async () => {
            try {
                const response = await fetch("data.json");
                const data = await response.json();
                console.log(response);
                // const asdasd = data.filter(asd => asd.category.includes("switch"));
                console.log(data);
                // setItems(asdasd);
                categoryName ? setItems(data.filter(item => item.category.includes(categoryName))) : setItems(data)
                // setItems(data);
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
        
    }, [categoryName])
    
    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} al carrito`);
    }
    
    return (
        <>
            <h2>{greeting}</h2>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            {loading ? <p>...Loading</p> : 
                error ? <p>Error</p> :
                    <ItemList items={items}/>} 
        </>
    )
}

export default ItemListContainer;
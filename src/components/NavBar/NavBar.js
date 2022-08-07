import React from 'react';
import { useState, useEffect } from 'react';
import logo from '../../logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { db } from "../Firebase/Firebase";
import { getDocs, collection } from "firebase/firestore";
import Login from "../Login/Login"

const NavBar = () => {

    const [categories, setCategories] = useState([]);

    const categoriesCollection = collection(db, "categorias");

    useEffect(() => {

        getDocs(categoriesCollection)
        .then(response => {
            const data = response.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setCategories(data);
        })
        .catch(err => {
            console.log(err);
        })
        
    }, [])

    return (
        <header style={styles.cabecera}>

            <Link to="/"><img style={styles.imagen} src={logo} className="App-logo" alt="" /></Link>

            <h1>RPG Mania</h1>
            
            <div style={styles.lista}>
                <nav>
                    {categories.map((category) => <Link key={category.id} style={styles.enlaces} to={category.route}>{category.name}</Link>)}
                </nav>

                <Link to="/cart" style={styles.enlaces}><CartWidget /></Link>

                <Login />
            </div>
  
        </header>
    )
}

export default NavBar;

const styles = {
    cabecera: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff',
    },
    imagen: {
        width: 60,
    },
    lista: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    enlaces: {
        margin: 10,
        textDecoration: 'none',
        color: '#fff',
    }
}
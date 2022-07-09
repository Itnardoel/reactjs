import React from 'react';
import logo from '../logo.svg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const categories = [
        {name: "Switch", id: 0, route: "category/switch"},
        {name: "PS4", id: 1, route: "category/ps4"},
    ];

    return (
        <header style={styles.cabecera}>

            <Link to="/"><img style={styles.imagen} src={logo} className="App-logo" alt="" /></Link>

            <h1>Tienda</h1>
            
            <div style={styles.lista}>
                <nav>
                    {categories.map((category) => <Link key={category.id} style={styles.enlaces} to={category.route}>{category.name}</Link>)}
                </nav>

                <Link to="/cart" style={styles.enlaces}><CartWidget cantidad={4}/></Link>
            </div>
            {/* <ul style={styles.lista}>
                <li>
                    <a style={styles.enlaces} href="#!">Inicio</a>
                </li>
                <li>
                    <a style={styles.enlaces} href="#!">Productos</a>
                </li>
                <li>
                    <a style={styles.enlaces} href="#!">Nosotros</a>
                </li>
                <li>
                    <CartWidget cantidad={4}/>
                </li>
            </ul> */}
  
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
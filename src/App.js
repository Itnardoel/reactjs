import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'

import CustomProvider from './components/CartContext/CartContext';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Catalogo'/>} />
          <Route path='category/:categoryId' element={<ItemListContainer greeting='Catalogo'/>} />
          <Route path='item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;

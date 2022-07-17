import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CustomProvider from './components/CartContext';
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
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;

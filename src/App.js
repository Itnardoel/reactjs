// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer catalogo='Catalogo'/>
      <ItemDetailContainer />
    </>
  );
}

export default App;

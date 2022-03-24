import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import LogoBar from './components/LogoBar/LogoBar';
import ListProducts from './components/ListProducts/ListProducts';


function App() {
  return (
    <div className="App">
      <NavBar />
      <LogoBar/>
      
      <ListProducts>
        <h3>Productos Recomendados</h3>
      </ListProducts>

    </div>
  );
}

export default App;

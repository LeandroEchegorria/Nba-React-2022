import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import LogoBar from './components/LogoBar/LogoBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LogoBar/>
      
      <ItemListContainer>
        <h3>Productos Recomendados</h3>
        
      </ItemListContainer>
      <ItemDetailContainer/>

    </div>
  );
}

export default App;

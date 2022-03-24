import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import LogoBar from './components/LogoBar/LogoBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <LogoBar/>
      
      <ItemListContainer>
        <h3>Productos Recom.</h3>
      </ItemListContainer>
      <ItemListContainer>
        <h3>Productos en oferta</h3>
      </ItemListContainer>
    </div>
  );
}

export default App;

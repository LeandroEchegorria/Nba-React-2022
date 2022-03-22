import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import LogoBar from './components/LogoBar/LogoBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <LogoBar/>
      
      <ItemListContainer />
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './components/NavBar/NavBar';
import LogoBar from './components/LogoBar/LogoBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductPage from './pages/Products';
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <LogoBar/>
        <Routes>
          <Route path='/contacto' element={<ContactPage />}/>
          <Route path='/' element={<HomePage />}/>
          <Route path='/:category' element={<ProductPage/>}/> 
          <Route path='/:category/:id' element={<ItemDetail />}/> 
          <Route path='*' element={<h1>Error 404: Page not found</h1>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
 
    

   
  );
}

export default App;

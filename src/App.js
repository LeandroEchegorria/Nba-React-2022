import './App.css';
import NavBar from './components/NavBar/NavBar';
import LogoBar from './components/LogoBar/LogoBar';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductPage from './pages/Products';
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//context
import { CartProvider } from './context/CartContext';




function App() {
  
  return (
    
    <div className="App" >
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <LogoBar/>
          <Routes>
            <Route path='/contacto' element={<ContactPage />}/>
            <Route path='/' element={<HomePage />}/>
            <Route path='/:category' element={<ProductPage/>}/> 
            <Route path='/:category/:id' element={<ItemDetailContainer />}/> 
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<h1>Error 404: Page not found</h1>}/>
          </Routes>       
          <Footer />     
        </BrowserRouter>
      </CartProvider>
      
    </div>  
  );
}

export default App;

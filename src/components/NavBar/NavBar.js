import React from 'react'
import logo from '../../logo.png'
import Button from '@mui/material/Button';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar ({ children }) {
    return (
      <header className="main-header">
        <div className='container-logo'>
          <img src={logo} className="img-header" alt=''/>
        </div>
        <h1>NBA Basketball Shop</h1>

        <ul className='navbar'>
            <li><Button variant="contained">Home</Button></li>
            <li><Button variant="contained">Productos</Button></li>
            <li><Button variant="contained">Nosotros</Button></li>
            <li><Button variant="contained">Contacto</Button></li>
            <li><Button variant="contained"><CartWidget /></Button></li>

        </ul>
      </header>
    )
}

export default NavBar;
import React from 'react'
import logo from '../../logo.png'
import Button from '@mui/material/Button';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Menu from './Menu/Menu'
import {Link} from 'react-router-dom';


function NavBar ({ children }) {
    return (
      <header className="main-header">
        <div className='container-logo'>
          <Link to={'/'}>
            <img src={logo} className="img-header" alt=''/>
          </Link>
          
        </div>
        <h1>NBA Basketball Shop</h1>

        <ul className='navbar'>
            <li><Link to={'/'}><Button variant="contained">Home</Button></Link></li>
            <li>
              <Link to={'/'}>
                <Menu title="Productos" option1={'Adidas'} option2={'Nike'} option3={'otras'} />
              </Link>
            </li>
            <li><Link to={'/contacto'}><Button variant="contained">Contacto</Button></Link></li>
            <li><Link to={'/'}><Button variant="contained"><CartWidget /></Button></Link></li>

        </ul>
      </header>
    )
}

export default NavBar;
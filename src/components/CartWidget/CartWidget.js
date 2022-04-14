import { useState, useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import CartContext from '../../context/CartContext';
import './CartWidget.css'

const CartWidget = () => {
    const { cartProducts, cantidad } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div className='cart-button'>
            <ShoppingCartIcon 
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            />
            <p>{cartProducts.length >0 && cantidad()}</p>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                className='cart-modal'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                <h3>Carrito de Compras</h3>
                <Divider />
                {cartProducts.map( (cartProduct) => {
                    return(
                        <MenuItem className='item-cart-modal' key={cartProduct.id}>
                            <div className='item-cart-modal__img'>
                                <img src={`${cartProduct.image}`} alt=''/> 
                            </div>
                            <div className='item-cart-modal__info'>
                                <p>{cartProduct.title}</p>
                                <p>USD {cartProduct.price}</p>
                            </div>
                            <div className='item-cart-modal__action'>
                                <DeleteIcon />
                            </div>
                        </MenuItem>
                    )
                })}
                
                <Divider />
                <div className='footer-modal-cart'>
                    <button className="buyBtn3"><Link to="/cart">Ir al Carrito</Link></button>
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget
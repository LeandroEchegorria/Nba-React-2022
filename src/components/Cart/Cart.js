import React, { useContext } from "react";
import './Cart.css';
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

 const Cart = ({props}) => {
    const { cartProducts, deleteOne, sumaTotal, emptyCart } = useContext(CartContext);


    return(
        
        <div className="cart-container">
            <h1 className="cart-text">Carrito de Compras</h1>
            <hr />
            
            { (cartProducts.length === 0) &&
            
                <div className="cart-text">
                    <p>No hay items en tu carrito...</p>
                    <Link to='/'>
                        <button className="buyBtn2">Continuar comprando</button>
                    </Link>
                </div>
            
            }    
            
            {                    
            cartProducts.map((prod) =>(
                <div key={ prod.id } className="row">
                    <div className="cart-products">
                        <h2> {prod.title}</h2>
                        <h3> Precio: USD {prod.price}</h3>
                        <p> Cantidad: { prod.quantity}  </p>
                    </div>
                    <div>
                        <img className="cart-image" src={`${prod.image}`} alt=""></img>
                    </div>
                    <div className="container">
                        <button className="buyBtn2" onClick={() => deleteOne(prod.id)}>Eliminar</button>
                    
                    </div>
                </div>))
            }
            
            
        {
            (cartProducts.length >= 1)
            
            &&

            <div className="cart-text">
                <Divider />
                <h4> Total de la compra: USD {sumaTotal()} </h4>
                <button className="buyBtn2" onClick={emptyCart}>Vaciar carrito</button>
            </div>

        }     
        
        
        </div>
    )
}
export default Cart;
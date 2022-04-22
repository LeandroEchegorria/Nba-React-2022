import React, { useContext, useState } from "react";
import './Cart.css';
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button, Divider } from "@mui/material";
import Modal from '../Modal/Modal';
import db from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import Loading from "../Loading/Loading";

 const Cart = ({props}) => {
    const { cartProducts, deleteOne, totalPrice, emptyCart } = useContext(CartContext);
    const [openModal , setOpenModal] = useState(false);
    const [sendForm , setSendForm] = useState(false);
    const [formData , setFormData] = useState(
        {
            name: '',
            phone: '',
            email: ''
        },
    )
    const [order , setOrder] = useState(
        { 
            buyer: formData,
            items: cartProducts,
            total: totalPrice
        }
    )
    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }
    const handleSubmit = (e) => {
        let prevOrder = {...order, buyer: formData} //genero objeto para pasar a la funcion pushOrder y crear doc en firebase
        e.preventDefault()
        setOrder({...order, buyer: formData})
        emptyCart()
/*         console.log("name",formData.name.length)
        console.log("formdata",formData) */
        pushOrder(prevOrder)
        setSendForm(true)
/*                 
            ((formData.name.length ===0) 
                || (formData.phone.length ===0) 
                    || (formData.email.length===0))
                    ?  (console.log("Error. Complete los campos"))
                        : ( 
                            console.log("avanza"),
                            pushOrder(prevOrder),
                            setSendForm(true)
                            )

             */
            
        }
        
    

    const [orderId, setOrderId] = useState()
    const pushOrder = async(info) => {
            //conexion a la collection
            const orderFirebase = collection (db, "ordenes") 
            //documento a agregar
            const orderDoc = await addDoc (orderFirebase, info)  
            setOrderId(orderDoc.id)
    }
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
                        <h2 className="cart-item"> {prod.title}</h2>
                        <h3 className="cart-item"> Precio: USD {prod.price}</h3>
                        <p className="cart-item"> Cantidad: { prod.quantity}  </p>
                        
                    </div>
                    <div className="cartAside">
                        <img className="cart-image" src={`${prod.image}`} alt=""></img>
                        <button className="buyBtn2" onClick={() => deleteOne(prod.id)}>Eliminar</button>
                    </div>
                    
                </div>))
            }  
        {
            (cartProducts.length >= 1)
            &&
            <div className="cart-text-bottom">
                <Divider />
                <h4 className="cart-total"> Total de la compra: USD {totalPrice} </h4>
                <button className="buyBtn2" onClick={emptyCart}>Vaciar carrito</button>
                <button className="buyBtn2" onClick={()=>setOpenModal(true)}>Completar Compra</button>
            </div>

        }    
        <Modal handleClose={() => setOpenModal(false)} open={openModal}>
            <div className="form-container">
                { !sendForm ? 
                    <>
                        <h3>Datos del comprador</h3>
                        <form onSubmit={handleSubmit}>
                            <input name="name" type="text" placeholder='Nombre completo' onChange={handleChange} value={formData.name}/>
                            <input name="phone" type="number" placeholder='Telefono' onChange={handleChange} value={formData.phone}/>
                            <input name="email" type="mail" placeholder='E-mail' onChange={handleChange} value={formData.email}/>

                            <Button  type="submit">Enviar</Button>

                        </form>
                    </>
                : (
                    <div>
                        <h3>Orden de compra enviada!</h3>
                        <h5>ID: {orderId ? orderId : <Loading />}</h5>
                    </div>

                )}
            </div>
                
        </Modal> 
        </div>
        
    )
}
export default Cart;
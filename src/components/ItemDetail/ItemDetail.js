import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useEffect, useState } from "react";
import {  Link} from "react-router-dom";
import CartContext from '../../context/CartContext';

const ItemDetail = ({ db, product}) => {

    const { addProductToCart} = useContext(CartContext)
    const [contador, setContador] = useState(0);
    const [mostrarItemCount, setMostrarItemCount] = useState(true);

    const addProduct = (e,cant) =>  {
        setContador(cant)
        addProductToCart( {...product, quantity: cant} )   
    }

    useEffect(()=>{
        if(contador>0){
            setMostrarItemCount(false);
        }
    },[contador])
  
    return (
        <div className="item-detail">
            <div className="item-detail-image">
                <img src={product.image} alt=""/>
            </div>

            <div className="item-detail-text">
                <h2>{product.title}</h2>
                <h4>Precio: USD {product.price}</h4>
                <h3>Talle: {product.size}</h3>
                {mostrarItemCount ?(
                        <ItemCount stock={product.stock} addProduct={addProduct}/>
                        ):( <>
                                <Link to="/cart">
                                    <button className='buyBtn'>Finalizar Compra</button>
                                </Link>
                                <Link to="/">
                                    <button className='buyBtn'>Continuar comprando</button>
                                </Link>
                            </>
                        )
                }
                
            </div>        
        </div>       

    )
}
export default ItemDetail;
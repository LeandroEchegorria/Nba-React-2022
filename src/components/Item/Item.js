import './Item.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';


const Item = ({data }) => {
  const {title, size, price, image, stock ,id} = data;
 // const {cartProducts, addProductToCart} = useContext(CartContext)



  return (
    <div className='card-container'>
      <div className="card-item">
        <h3>{title}</h3>
        <img alt='title' src={image}></img>
        <p>Precio: USD {price} </p>
        <p>Talle: {size} US</p>
        <div>
          {(stock<1) ? <h2>Sin Stock</h2> 
            : <div>
                <p>Stock: {stock}</p>   
                
              </div>
          }
        </div>
        
        <Link to={`/productos/${id}`}><button className='buyBtn'>Vista rápida</button></Link>
      </div>
    </div>

  )
}
export default Item;

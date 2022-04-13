import './Item.css';
import { useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';


const Item = ({data }) => {
  const {title, size, price, image, stock ,id} = data;
  const {cartProducts, addProductToCart} = useContext(CartContext)


/*   const addToCart = (e) => {
    e.stopPropagation()
    addProductToCart(data)
  }
 */
  return (
    <div>
      <div className="card-item">
        <h3>{title}</h3>
        <img alt='title' src={image}></img>
        <p>Precio: USD {price} </p>
        <p>Talle: {size} US</p>
        <div>
          {(stock<1) ? <h2>Sin Stock</h2> 
            : <div>
                <p>Stock: {stock}</p>   
                {/* <button className='buyBtn' onClick={addToCart}>Comprar</button> */}
              </div>
          }
        </div>
        
        <Link to={`/productos/${id}`}><button className='buyBtn'>Vista rápida</button></Link>
      </div>
    </div>

  )
}
export default Item;

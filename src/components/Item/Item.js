import './Item.css';
import { Link } from 'react-router-dom';


const Item = ({data , addProduct}) => {
  const {title, size, price, image, stock ,id} = data;

  return (
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
    
  )
}
export default Item;

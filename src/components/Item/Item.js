import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';



const Item = ({data}) => {
  const {title, size, price, image, stock ,id} = data;

  return (
    <div className="card-item">
      <h3>{title}</h3>
      <img alt='title' src={image}></img>
      <p>Precio: USD {price} </p>
      <p>Talle: {size}</p>

      <ItemCount stock={stock}/>
      <Link to={`/productos/${id}`}><button className='buyBtn'>Vista rápida</button></Link>
    </div>
    
  )
}
export default Item;

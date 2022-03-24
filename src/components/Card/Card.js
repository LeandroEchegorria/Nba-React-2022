import './Card.css';
import ItemCount from '../ItemCount/ItemCount';

function onAdd () {
  return(
    console.log("hola")
  )
}


const Card = ({data}) => {
  const {title, size, price, image, stock} = data;

  return (
    <div className="card-item">
        <h3>{title}</h3>
        <img alt='title' src={image}></img>
        <p>Precio: USD {price} </p>
        <p>Talle: {size}</p>

        <ItemCount stock={stock}/>

    </div>
    
  )
}
export default Card;

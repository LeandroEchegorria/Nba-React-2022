import './Card.css';

export default function Card({title, size, price, image, brand}) {
   
  return (
    <div className="card-item">
        <h3>{title}</h3>
        <img alt='title' src={image}></img>
        <p>Precio: USD {price} </p>
        <p>Talle: {size}</p>
        <button>Comprar</button>

    </div>
    
  );
}

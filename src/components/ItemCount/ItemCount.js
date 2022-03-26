import { useState , useEffect} from 'react';
import './ItemCount.css';


 const ItemCount = ({stock}) => {
  const [count, setCount]= useState(1);

  const onPlus = () => {
    (count < stock) && setCount(count + 1);
  }
  const onRemove = () => {
    (count >1) && setCount(count - 1)
  }
  function onAdd () {
    (count >0) && console.log(`Se agregaron ${(count)} productos al carrito`);  
  }
  useEffect( () => {
    stock = stock-count;
 
},onAdd)
  return (
    //Renderizado condicional
    <div>
    {(stock<1) ? <h2>Sin Stock</h2> 
    : <div>
        <button onClick={onRemove}>-</button>
        <p>{count}</p>
        <button onClick={onPlus}>+</button>
        <p>Stock: {stock}</p>
        <button className='buyBtn' onClick={onAdd}>Agregar</button>
      </div>
    }
    </div>
  );
}
export default ItemCount;
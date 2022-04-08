import { useState , useEffect} from 'react';
import './ItemCount.css';


 const ItemCount = ({stock, addProduct}) => {
   const [count, setCount]= useState(1);

  const onPlus = () => {
    (count < stock) && setCount(count + 1);
  }
  const onRemove = () => {
    (count >1) && setCount(count - 1)
  } 

  useEffect( () => {
    stock = stock-count;
 
  },[stock])
  return (
    <div>
        <h5 className='itemCount'>
          <button onClick={onRemove} disabled={count === 1 ? true : false}>-</button>
          <p>{count}</p>
          <button onClick={onPlus} disabled={count === stock ? true : false}>+</button>
        </h5>
        <p>Stock: {stock}</p>
        <button className='buyBtn' onClick={ (e) => addProduct(e,count)}>Agregar</button>
  
    </div>
  );
}
export default ItemCount;
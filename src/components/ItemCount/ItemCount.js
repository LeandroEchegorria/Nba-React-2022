import { useState } from 'react';
import './ItemCount.css'


 const ItemCount = ({stock, onAdd}) => {
  const [count, setCount]= useState(1);
  
  const onPlus = () => {
    if (count < stock){
      setCount(count + 1);
  }}
  const onRemove = () => {
    if (count >0){
      setCount(count - 1);
  }}
  
  return (
    <>
      <button onClick={onRemove}>-</button>
      <p>{count}</p>
      <button onClick={onPlus}>+</button>
      <p>Stock: {stock}</p>
      <button className='buyBtn' onClick={onAdd}>Agregar</button>
    </>
  );
}
export default ItemCount;
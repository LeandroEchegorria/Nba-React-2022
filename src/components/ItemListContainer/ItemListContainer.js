import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import mockProducts from '../../utils/mockProducts';
import getProducts from '../../helpers/getProducts';

//componente declarado forma moderna
const ItemListContainer = ({children}) => {
    const [products , setProducts]= useState([]);

    useEffect( () => {
        getProducts(mockProducts).then( (data) => {
            setProducts(data);
        }).finally( () => {
            console.log("Termino la llamada")
        })
    }, [] )

    return (
        <div>
            <h2 className='title-product'>{children}</h2>
            <div className="container-cards">
                <ItemList array={mockProducts} />
                
            </div>
            
        </div>
    )
}
export default ItemListContainer;
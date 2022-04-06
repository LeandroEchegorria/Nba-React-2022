import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import mockProducts from '../../utils/mockProducts';
import getProducts from '../../helpers/getProducts';

const ItemListContainer = ({children, category}) => {

    const [products , setProducts]= useState([]);

    useEffect( () => {
        getProducts(mockProducts)
            .then( (productos) => {
                setProducts(category ? productos.filter( (produ) => produ.category === category ) : productos)

            })
    }, [category] )

    return (
        <div>
            <h2 className='title-product'>{children}</h2>
            <div className="container-cards">
                <ItemList array={products} />
                
            </div>
            
        </div>
    )
}
export default ItemListContainer;
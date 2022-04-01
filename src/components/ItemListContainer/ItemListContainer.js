import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import mockProducts from '../../utils/mockProducts';


//componente declarado forma moderna
const ItemListContainer = ({children}) => {
    const [products , setProducts]= useState([]);

    const getProducts = () => {
        return new Promise ( (resolve, reject) => {
            return setTimeout ( () => {
                resolve(mockProducts);
            }, 3000);
        })
    }

    useEffect( () => {
        getProducts().then( (data) => {
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
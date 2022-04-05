import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import mockProducts from '../../utils/mockProducts';
import getProducts from '../../helpers/getProducts';
import { useParams } from 'react-router-dom';

//componente declarado forma moderna
const ItemListContainer = ({children}) => {
    const {category} = useParams();

    const [products , setProducts]= useState([]);

    useEffect( () => {
        setProducts([]);
        getProducts(mockProducts).then( (productos) => {
            category ? filterProductByCategory(productos, category) : setProducts(productos)
/*             setProducts(productos);
            console.log(category)
            filterProductByCategory(products, category) */
        })
    }, [] )

    const filterProductByCategory = (array, category) =>{
        return array.map ( (product, i) => {
            if (product.category === category){ 
                return setProducts(products => [...products , product]);
            }
        } )
    }

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
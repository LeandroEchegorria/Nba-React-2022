import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import getProducts from '../../helpers/getProducts';
import Loading from '../Loading/Loading';

const ItemListContainer = ({children, category}) => {
    const [ loading , setLoading] = useState(true);
    const [products , setProducts]= useState([]);

    useEffect( () => {
        getProducts()
            .then( (productos) => {
                setProducts(category ? productos.filter( (produ) => produ.category === category ) : productos)
            })
            .finally( () => setLoading(false))
    }, [category] )

    return (
        <div className='container'>
            {
                loading ? <Loading /> : (
                    <>
                        <h2 className='title-product'>{children}</h2>
                        <div className="container-cards">
                            <ItemList array={products}  />
                            
                        </div>
                    </>
                )
            }

            
            
        </div>
    )
}
export default ItemListContainer;
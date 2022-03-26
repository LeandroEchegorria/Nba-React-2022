import Card from '../Card/Card';
import './ListProducts.css';
import item1 from '../../../src/img/shoes/Adidas_Adizero_Rose1.png';
import { useState, useEffect } from 'react';


//componente declarado forma moderna
const ListProducts = ({children}) => {

    const mockProductos =   [
        {
            id: 1,
            title:'Adidas Adizero Rose 1',
            size:9.5 ,
            price:145,
            image: item1,
            stock: 0
        },
        {
            id:2,
            title:'Nike 1',
            size: 8 ,
            price: 145,
            image: item1,
            stock: 5
        },
        {
            id: 3,
            title:'Adidas Adizero Rose 2',
            size:9.5 ,
            price:145,
            image: item1,
            stock: 3
        },
        {
            id: 4,
            title:'Under Armour Curry 9',
            size:9.5 ,
            price:100,
            image: item1,
            stock: 0
        },
        {
            id: 5,
            title:'Adidas Trae Young 1',
            size:9.5 ,
            price:110,
            image: item1,
            stock: 2
        },    
        {
            id: 6,
            title:'Adidas Adizero Rose 3',
            size:9.5 ,
            price:125,
            image: item1,
            stock: 4
        }
    ]
       
    
    const [products , setProducts]= useState([]);

    const getProducts = () => {
        return new Promise ( (resolve, reject) => {
            return setTimeout ( () => {
                resolve(mockProductos);
            }, 3000);
                
        })
    }

    useEffect( () => {
        getProducts().then( (data) => {
            setProducts(data)
        }).finally( () => {console.log("Termino la llamada")})
    }, )

    return (
        <>
        <h2 className='title-product'> {children}</h2>
        <div className="container-cards">

        {products.map( (producto , id) => {
            return (
                <Card data={producto} key={id}/>
            )
        })}

        </div>
        </>
    )
}
export default ListProducts;
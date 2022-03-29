import Item from '../Item/Item';
import './ItemList.css';
import item1 from '../../../src/img/shoes/Adidas_Adizero_Rose1.png';
import item2 from '../../../src/img/shoes/Nike_Giannis_Inmortality.png';
import item3 from '../../../src/img/shoes/Adidas_DON_ISSUE2.png';
import item4 from '../../../src/img/shoes/Nike_KD14.png';
import item5 from '../../../src/img/shoes/Adidas_Trae_Young1.png';
import item6 from '../../../src/img/shoes/Adidas_DON_ISSUE3.png';
import { useState, useEffect } from 'react';


//componente declarado forma moderna
const ItemList = ({children}) => {

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
            image: item2,
            stock: 5
        },
        {
            id: 3,
            title:'Adidas Adizero Rose 2',
            size:9.5 ,
            price:145,
            image: item3,
            stock: 3
        },
        {
            id: 4,
            title:'Under Armour Curry 9',
            size:9.5 ,
            price:100,
            image: item4,
            stock: 0
        },
        {
            id: 5,
            title:'Adidas Trae Young 1',
            size:9.5 ,
            price:110,
            image: item5,
            stock: 2
        },    
        {
            id: 6,
            title:'Adidas Adizero Rose 3',
            size:9.5 ,
            price:125,
            image: item6,
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
            setProducts(data);
        }).finally( () => {
            console.log("Termino la llamada")
        })
    }, [] )

    return (
        <>
        <div className="container-cards">
            {products.map( (producto , id) => {
                return (
                    <Item data={producto} key={id}/>
                )
            })}

        </div>
        </>
    )
}
export default ItemList;
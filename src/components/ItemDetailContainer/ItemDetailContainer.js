import mockItem from '../../utils/mockItem';
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () =>{

    const [ props , setProps] = useState({});

    const getItem = () => {
        return new Promise ( (resolve,reject) => {
            return setTimeout( () => {
                resolve (mockItem);
            }, 3000);
        })
    }
    
    useEffect( () => {
        getItem().then( (dato) => {
            setProps(dato);
        })
    },[])
    
    return(
        <div className="item-detail-container">
            <ItemDetail array={props}/>
        </div>
    )
};
export default ItemDetailContainer;
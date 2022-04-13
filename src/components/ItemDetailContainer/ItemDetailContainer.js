import mockItem from '../../utils/mockItem';
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from '../Loading/Loading';

const ItemDetailContainer = () =>{

    const [ props , setProps] = useState({});
    const [ loading , setLoading] = useState(true);

    const getItem = () => {
        return new Promise ( (resolve,reject) => {
            return setTimeout( () => {
                resolve (mockItem);
            }, 3000);
        })
    }
    
    useEffect( () => {
        getItem()
        .then( (dato) => { setProps(dato) })
        .catch( (err) => console.error(`error: ${err}`))
        .finally( () => setLoading(false))
    },[])
    
    return(
        <div className="item-detail-container">
            {
                (loading) ? ( <Loading/>) : 

                <ItemDetail array={props} loading={loading} />
            }
            
        </div>
    )
};
export default ItemDetailContainer;
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockProducts from "../../utils/mockProducts";


const ItemDetail = ({props}) => {

    const {id, category} = useParams(); //useParams toma los datos que consiga de la ruta
    const [product, setProduct] = useState({});

    useEffect( () => {
        filterProductById(mockProducts, id);
    }, [id])
    
    const filterProductById = (array, id) =>{
        return array.map ( (product) => {
            if (product.id === id){ 
                return setProduct(product);
            }
        } )
    }
    return (
        <div className="item-detail">
            <div className="item-detail-image">
                <img src={product.image} alt=""/>
            </div>

            <div className="item-detail-text">
                <h2>{product.title}</h2>
                <h4>Precio: USD {product.price}</h4>
                <h3>Talle: {product.size}</h3>
                <ItemCount stock={product.stock}/>
            </div>        
        </div>       

    )
}
export default ItemDetail;
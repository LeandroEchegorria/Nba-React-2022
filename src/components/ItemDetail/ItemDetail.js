import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useEffect, useState } from "react";
import { useParams , Link} from "react-router-dom";
import mockProducts from "../../utils/mockProducts";
import CartContext from '../../context/CartContext';



const ItemDetail = ({props}) => {

    const {id} = useParams(); //useParams toma los datos que consiga de la ruta
    const [product, setProduct] = useState({});
    const [contador, setContador] = useState(0);
    const [mostrarItemCount, setMostrarItemCount] = useState(true);
    

    //context
    const {cartProducts, addProductToCart} = useContext(CartContext)

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


    const addProduct = (e,cant) =>  {
        setContador(cant)
        console.log(`Agregaste ${cant} productos `)
        addProductToCart( {...product, quantity: cant} )
        
        
    }
    useEffect(()=>{
        if(contador>0){
            setMostrarItemCount(false);
        }
    },[contador])
  
    return (
        <div className="item-detail">
            <div className="item-detail-image">
                <img src={product.image} alt=""/>
            </div>

            <div className="item-detail-text">
                <h2>{product.title}</h2>
                <h4>Precio: USD {product.price}</h4>
                <h3>Talle: {product.size}</h3>
                {mostrarItemCount ?(
                        <ItemCount stock={product.stock} addProduct={addProduct}/>
                        ):( <>
                                <Link to="/cart">
                                    <button className='buyBtn'>Finalizar Compra</button>
                                </Link>
                                <Link to="/">
                                    <button className='buyBtn'>Continuar comprando</button>
                                </Link>
                            </>
                        )
                }
                
            </div>        
        </div>       

    )
}
export default ItemDetail;
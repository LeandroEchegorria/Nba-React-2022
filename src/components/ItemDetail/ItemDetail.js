import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useEffect, useState } from "react";
import { useParams , Link} from "react-router-dom";

import CartContext from '../../context/CartContext';
import { doc, getDoc } from "firebase/firestore";
import db from '../../firebase';




const ItemDetail = ({props}) => {

    const {id} = useParams(); //useParams toma los datos que consiga de la ruta
    const [product, setProduct] = useState({});
    const [contador, setContador] = useState(0);
    const [mostrarItemCount, setMostrarItemCount] = useState(true);
    

    //context
    const {cartProducts, addProductToCart} = useContext(CartContext)

    const getProducts = async () => {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let product = docSnap.data()
            product.id= docSnap.id
            setProduct(product)
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
    }

    useEffect( () => {
        getProducts()
    }, [id])
    
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
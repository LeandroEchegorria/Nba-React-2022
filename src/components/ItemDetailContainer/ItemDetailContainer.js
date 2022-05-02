import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from '../Loading/Loading';
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from '../../firebase';

const ItemDetailContainer = () =>{

    const [ loading , setLoading] = useState(true);

    const {id} = useParams(); //useParams toma los datos que consiga de la ruta
    const [product, setProduct] = useState({});

    const getProductsDetail = async () => {

        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let product = docSnap.data()
            product.id= docSnap.id
            setProduct(product)
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
    }

    useEffect( () => {
        getProductsDetail()
        .finally( () => setLoading(false))        
    },[id])

    
    return(
        <div className="item-detail-container">
            {
                (loading) ? ( <Loading/>) : 

                <ItemDetail db={db} product={product} />
            }
            
        </div>
    )
};
export default ItemDetailContainer;
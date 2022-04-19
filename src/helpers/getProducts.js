import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

const getProducts = async (array) => {

    const itemCollection = collection(db, 'productos')
    const productSnapshot = await getDocs(itemCollection)

    const productList = productSnapshot.docs.map( (doc) => {
        let product = doc.data()
        product.id= doc.id
        return product
    })
    return productList;
    
}
export default getProducts;
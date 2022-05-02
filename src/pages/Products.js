import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import Nike from "../components/brands/Nike";
import Adidas from "../components/brands/Adidas";
import Jordan from "../components/brands/Jordan";
import './Products.css';


const ProductPage = () => {
    const {category} = useParams();


    return (
        <div>
            <ItemListContainer category={category}>
                <h3 className="productos-logo">Productos {category}
                    {category==='Nike' ? <Nike/> 
                    : category==='Adidas' ? <Adidas/>
                    : category==='Jordan' && <Jordan />
                    } 
                </h3>
                <div>
                      
                </div>
            </ItemListContainer>

        </div>
    )
}
export default ProductPage;
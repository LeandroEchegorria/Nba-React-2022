import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

const ProductPage = () => {
    const {category} = useParams();

    return (
        <div>
            <ItemListContainer category={category}>
                <h3>Productos {category}</h3>
            </ItemListContainer>

        </div>
    )
}
export default ProductPage;
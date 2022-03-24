import './ItemListContainer.css';
import ListProducts from '../ListProducts/ListProducts';


//componente declarado forma moderna
const ItemListContainer = () => {
    return (
        <div className="container-cards">
            <ListProducts />
        </div>
        
    )
}
export default ItemListContainer;
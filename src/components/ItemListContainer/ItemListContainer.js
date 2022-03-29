import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';


//componente declarado forma moderna
const ItemListContainer = ({children}) => {
    return (
        <>
            <h2>{children}</h2>
            <div className="container-cards">
                <ItemList />
            </div>
        </>

        
    )
}
export default ItemListContainer;
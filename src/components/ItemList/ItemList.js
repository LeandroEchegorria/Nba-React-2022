import Item from '../Item/Item';
import './ItemList.css';

const ItemList = (props) => {
    
    return (
        <div className="container-cards">
            {props.array.map( (producto , id) => {
                return (
                    <Item data={producto} key={id}/>
                )
            })}
            
        </div> 
    )
}
export default ItemList;
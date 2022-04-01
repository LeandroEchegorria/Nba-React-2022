import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = (props) => {
    return (
        <>
        {props.array.map( (props) => {
            return (
                <div className="item-detail">
                    <div className="item-detail-image">
                        <img src={props.image} alt=""/>
                    </div>
                    <div className="item-detail-text">
                        <h2>{props.title}</h2>
                        <h4>Precio: USD {props.price}</h4>
                        <h3>Talle: {props.size}</h3>
                        <ItemCount stock={props.stock}/>
                    </div>        
                </div>
            )
        })}
        </>
    )
}
export default ItemDetail;
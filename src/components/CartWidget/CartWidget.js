import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';

const CartWidget = () => {

    return (
        <li>
            <ShoppingCartIcon sx={{ fontSize: 20}} />
            <p>Comprar</p>
        </li>
    )
}
export default CartWidget;
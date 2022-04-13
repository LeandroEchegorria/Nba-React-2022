import { createContext , useState} from "react";

const CartContext = createContext([]);

const CartProvider = ({children}) => {
    const [cartProducts , setCartProducts] = useState([])

        const addProductToCart = (product) => {
            console.log(cartProducts)

            if (isInCart(product.id)) { 
                const prod = cartProducts.find( (pr) => pr.id === product.id )
                //desestructurando desde el obj
                const { quantity } = prod;
                prod.quantity = product.quantity + quantity;
                const newCart = [ ...cartProducts];
                setCartProducts(newCart);
            }
            else {
                //Mantiene el contenido anterior y agrega el nuevo
                setCartProducts(cartProducts => [...cartProducts, product]);
            }
            
            console.log(cartProducts)
        }
        const emptyCart = () => {
            setCartProducts([])
        }
        const isInCart = (id) =>{
            return cartProducts.some( (prod => prod.id === id) ) //boolean
        }
        const deleteOne = (id) => {
            setCartProducts(cartProducts.filter(p => p.id !== id));
        }
        const sumaTotal = () => {
            return cartProducts.reduce((acum, item) => acum = acum + (item.price * item.quantity), 0)
         }
        const data = {
            cartProducts,
            addProductToCart,
            emptyCart,
            sumaTotal,
            deleteOne
        }

    return( 
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export {CartProvider}
export default CartContext
import Card from '../Card/Card';
import './ListProducts.css';
import item1 from '../../../src/img/shoes/Adidas_Adizero_Rose1.png';


//componente declarado forma moderna
const ListProducts = ({children}) => {

    let dataProduct = {
        title:'Adidas Adizero Rose 1',
        size:9.5 ,
        price:145,
        image: item1,
        stock: 5
    }
    return (
        <>
        <p className='title-product'>{children}</p>
        <div className="container-cards">
            <Card data={dataProduct}/>
            <Card data={dataProduct}/>
            <Card data={dataProduct}/>
            <Card data={dataProduct}/>

        </div>
        </>
    )
}
export default ListProducts;
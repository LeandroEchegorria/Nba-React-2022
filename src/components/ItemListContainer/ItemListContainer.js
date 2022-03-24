import Card from '../Card/Card';
import './ItemListContainer.css';
import item1 from '../../../src/img/shoes/Adidas_Adizero_Rose1.png';
/* import item2 from '../../img/shoes/Nike_Adapt_2_Basketball.png';
import item3 from '../../img/shoes/Adidas_DON_ISSUE2.png';
import item4 from '../../img/shoes/Adidas_DON_ISSUE3.png';
import item5 from '../../img/shoes/Nike_Giannis_Inmortality.png';
import item6 from '../../img/shoes/Nike_Lebron_Witness_VI.png'; */


//componente declarado forma moderna
const ItemListContainer = ({children}) => {

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

            
            {/* <Card title={'Adidas Adizero Rose 1'} size={9.5} price={145} image={item1} stock={3}/>
            <Card title={'Nike Adapt 2.0 Basketball'} size={8} price={140} image={item2} stock={7}/>
            <Card title={'Adidas D.O.N. Issue #2'} size={8} price={140} image={item3} stock={9}/>
            <Card title={'Adidas D.O.N. Issue #3'} size={8} price={140} image={item4} stock={5}/>
            <Card title={'Nike Giannis Immortality'} size={8} price={140} image={item5} stock={5}/>
            <Card title={'Nike LeBron Witness VI'} size={8} price={140} image={item6} stock={6}/>
            <Card title={'Adidas Adizero Rose 1'} size={9.5} price={145} image={item1} stock={5}/>
            <Card title={'Nike Adapt 2.0 Basketball'} size={8} price={140} image={item2} stock={4}/>
            <Card title={'Adidas D.O.N. Issue #2'} size={8} price={140} image={item3} stock={5}/>
            <Card title={'Adidas D.O.N. Issue #3'} size={8} price={140} image={item4} stock={1}/>
            <Card title={'Nike Giannis Immortality'} size={8} price={140} image={item5} stock={2}/>
            <Card title={'Nike LeBron Witness VI'} size={8} price={140} image={item6} stock={3}/> */}
        </div>
        </>
    )
}
export default ItemListContainer;
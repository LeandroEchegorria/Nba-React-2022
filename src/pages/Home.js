import Banner from "../components/Banner/Banner";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const HomePage = () => {
   
    return (
        
        <div >
            <Banner/>            
            <h2 className="home">Zapatillas de Basketball</h2>
            <ItemListContainer />
        </div>
    )
}
export default HomePage;
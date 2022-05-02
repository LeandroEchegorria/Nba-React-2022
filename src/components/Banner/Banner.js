import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../img/shoes/banner-lebron.jpg';
import image2 from '../../img/shoes/banner-giannis.jpg';
import image3 from '../../img/shoes/banner-trae.jpg';
import './Banner.css';


class Banner extends Component {
    render() {
        return (
            <Carousel autoPlay="true" infiniteLoop="true">
                
                <div className='banner-text'>
                    <img src={image1} alt='' />
                    <p className="legend">Lebron Nike Shoes</p>
                </div>
                <div className='banner-text'>
                    <img src={image2} alt='' />
                    <p className="legend">Giannis Nike Shoes</p>
                </div>
                <div className='banner-text'>
                    <img src={image3} alt=''/>
                    <h2 className="legend">Trae Adidas Shoes</h2>
                </div>
            </Carousel>
        );
    }
};
export default Banner









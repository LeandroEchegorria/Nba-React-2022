import './Footer.css';
import logo from '../../logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppleIcon from '@mui/icons-material/Apple';

const Footer = () => {
    return(
        <div className="footer-main">
            <div className='footer-col1'>
                <img src={logo} className="img-footer" alt=''/>
            </div>
            <div className='footer-col2'>
                <ul>
                    <li>NBA 2022:</li>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contact</li>    
                </ul>
            </div>
            <div className='footer-col3'>
                <ul className='footer-icons'>
                    <li><AppleIcon/></li>
                    <li><FacebookIcon/></li>
                    <li><InstagramIcon/></li>
                    <li><YouTubeIcon/></li>
                </ul>
                
                <p>Ciudad Autónoma de Buenos Aires, Argentina</p>
                <p>Web design by Leandro Echegorría</p>
            </div>


        </div>
    )
}
export default Footer;
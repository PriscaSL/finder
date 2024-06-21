import React from "react";
import '../styles/footer.css';
import Logo from '../assets/LOGO GLISH NOIR.png';
import Home from '../assets/Home.png';
import { Link } from "react-router-dom";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

function Footer() {
    return (
        <footer>
            <div className="footer-row">
            <img src={Logo} alt="Logo" className='logo' />
            </div>
            <div className="division"></div>
            <div className="footer-row fotter-row-grid footer-title">
                <div>Usefull Links</div>
                <div>Contact Us</div>
                <div>Whatch Videos</div>
            </div>
            <div className="footer-row fotter-row-grid">
                <div>
                    <ul>
                        <li><Link to="/why-us">Why Us</Link></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#services">Service</a></li>
                    </ul>
                </div>
                <div>
                    <div className="footer-contact">RAHARIJESY Safidy</div>
                    <div className="footer-contact">
                        +261 32 87 234 23<br/>
                        raharijesysafidy@gmail.com
                    </div>
                </div>
                <div className="footer-image-container">
                    <PlayCircleFilledIcon className="btn-play"/>
                    <img src={Home} alt="footer-image" />
                </div>
            </div>
            <div className="division"></div>
            <div className="footer-row">
                Copyright 2024 - Spudster
            </div>
        </footer>
    );
}

export default Footer;
import React from "react";
import '../styles/footer.css';
import Logo from '../assets/LOGO GLISH NOIR.png';



function Footer() {
    return (
        <footer>
            <div class="footer-row">
            <img src={Logo} alt="Logo" className='logo' />
            </div>
            <div class="division"></div>
            <div class="footer-row fotter-row-grid footer-title">
                <div>Usefull Links</div>
                <div>Contact Us</div>
                <div>
                    <div class="show-all">v</div>
                </div>
            </div>
            <div class="division"></div>
            <div class="footer-row fotter-row-grid">
                <div>
                    <ul>
                        <li><a href="#">Why Us</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Service</a></li>
                    </ul>
                </div>
                <div>
                    <div class="footer-contact">RAHARIJESY Safidy</div>
                    <div class="footer-contact">
                        +261 32 87 234 23<br/>
                        raharijesysafidy@gmail.com
                    </div>
                </div>
                <div class="footer-image-container">
                    <button class="btn-play">Play now</button>
                    <img src="./assets/image/capadrone.webp" alt="footer-image" />
                </div>
            </div>
            <div class="division"></div>
            <div class="footer-row">
                Copyright 2024 - Spudster
            </div>
        </footer>
    );
}

export default Footer;
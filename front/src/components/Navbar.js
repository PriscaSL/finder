import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom'; 
import Logo from '../assets/LOGO GLISH NOIR.png';

function Navbar() {
  return (
    <nav>
      <div className="leftSide">
        <img src={Logo} alt="Logo" className='logo' />
      </div>
      <div className='rightSide' id='navbar'>
        <Link to="/why-us">Why us</Link>
        <Link to="/homeuser">Services</Link>
        <Link to="/homeuser">Contact</Link>
        <button onClick={(e) => window.location.href ="/login"} className='signin-link'>Sign in</button>
        <button onClick={(e) => window.location.href ="/login"} className='start-for-free-link'>Start for free</button>
      </div>
    </nav>
  );
}

export default Navbar;

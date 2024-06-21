import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="leftSide">
        {/*<img src='' alt="Logo" />*/}
      </div>
      <div className='rightSide' id='navbar'>
         
        <Link to="/why-us">Why us</Link>
        <Link to="/homeuser">Services-Homeuserpermanent-</Link>
        
        <button id='btnnobg'>Sign in</button>
        <button id='btnwbg'>Start for free</button>
      </div>
    </nav>
  );
}

export default Navbar;

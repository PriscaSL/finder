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
         
        <Link to="/beginner">Why us-BeginnerPagePerm</Link>
        <Link to="/homeuser">Services-Homeuserpermanent-</Link>
        
        <button id='btnnobg' onClick={(e) => window.location.href ="/login"}>Sign in</button>
        <button id='btnwbg' onClick={(e) => window.location.href ="/login"}>Start for free</button>
      </div>
    </nav>
  );
}

export default Navbar;

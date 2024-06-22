import React from 'react';
import '../styles/sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


function Sidebar() {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav" style={{paddingTop: "60px"}}>
                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <HomeIcon/>
                        <span className="menu-title">Home</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <MenuBookIcon/>
                        <span className="menu-title">Exercise</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                        <SchoolIcon/>
                        <span className="menu-title">Course</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/documentation/documentation.html">
                        <WorkspacePremiumIcon/>
                        <span className="menu-title">Certificat</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;
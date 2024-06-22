import React from 'react';
import '../styles/sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <nav className="sidebar sidebar-offcanvas sidebar-icon-only" id="sidebar">
            <ul className="nav" style={{paddingTop: "60px"}}>
                <li className="nav-item">
                    <Link className="nav-link" to="/homeuser">
                        <HomeIcon/>
                        <span className="menu-title">Home</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/beginner">
                        <MenuBookIcon/>
                        <span className="menu-title">Exercise</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/homeuser">
                        <SchoolIcon/>
                        <span className="menu-title">Course</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/homeuser">
                        <WorkspacePremiumIcon/>
                        <span className="menu-title">Certificat</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;
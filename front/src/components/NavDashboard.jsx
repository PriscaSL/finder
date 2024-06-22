import Logo from "../assets/ICONE GLISH.png";
import LogoBlack from '../assets/LOGO GLISH NOIR.png';
import Rakoto from '../assets/rakoto.jpg';




function NavBarDashboard() {

    const logout = (e) => {
        e.preventDefault();
        sessionStorage.removeItem('token');
        window.location.href = '/login';
    }


    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a className="navbar-brand brand-logo mr-5" href="index.html"><img src={LogoBlack} className="mr-2" alt="logo" /></a>
                <a className="navbar-brand brand-logo-mini" href="index.html"><img src={Logo} alt="logo" /></a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                    <span className="icon-menu"></span>
                </button>
                <ul className="navbar-nav mr-lg-2">
                    <li className="nav-item nav-search d-none d-lg-block">
                        <div className="input-group">
                            <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                                <span className="input-group-text" id="search">
                                    <i className="icon-search"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" />
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item nav-profile dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                            <img src={Rakoto} alt="profile" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            <a className="dropdown-item">
                                <i className="ti-user text-primary"></i>
                                Profile
                            </a>
                            <a className="dropdown-item">
                                <i className="ti-settings text-primary"></i>
                                Settings
                            </a>
                            <a className="dropdown-item" onClick={(e) => logout(e)}>
                                <i className="ti-power-off text-primary"></i>
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="icon-menu"></span>
                </button>
            </div>
        </nav>
    );
}


export default NavBarDashboard;
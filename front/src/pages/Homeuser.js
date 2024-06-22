import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import "../styles/Homeuser.css";
import "../styles/dashboard/feather/feather.css";
import "../styles/dashboard/ti-icons/css/themify-icons.css";
import "../styles/dashboard/vendor.bundle.base.css";
import "../styles/dashboard/vertical-layout-light/style.css";
import NavBarDashboard from '../components/NavDashboard';
import profile from '../assets/rakoto.jpg';


import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import ModuleItems from '../components/ModuleItems';
import ModuleList from '../helpers/ModuleList';

function Homeuser() {


  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      window.location.href = '/login';
    }
  }, []);

  return (
    <>
      <div className="container-scroller">
        <NavBarDashboard />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin">
                  <div className="row">
                    <div className="col-12">
                      <div className='Homeuser'>
                        <div className='Dashboard'>
                          <div className='welcomtext'>
                            <div className='contenu'>
                              <img src={profile} alt="profil" />
                              <h3>Welcome Eddy!</h3>
                              <p className='niveau'>Beginner</p>
                              <p className='xp'><OfflineBoltOutlinedIcon /> 0 px</p>
                            </div>
                          </div>
                          <hr className='lineuser' />
                          <div className='foothomeuser'>
                            <span>
                              <h1 className='letslearn'>Let's learn and practice  <i><ArrowForwardIcon /></i></h1>
                              <button id='getstart'>Get Started for Free </button>
                            </span>
                            <div className='moduleList'>
                              {ModuleList.map((moduleItem, key) => {
                                return (
                                  <ModuleItems
                                    key={key}
                                    bg={moduleItem.background}
                                    image={moduleItem.image}
                                    title={moduleItem.tilte}
                                    paragraphe={moduleItem.paragraphe}
                                  />)
                              })}
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homeuser
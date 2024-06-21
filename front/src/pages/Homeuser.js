import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar';
import '../styles/Homeuser.css'
import profile from '../assets/rakoto.jpg'
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ModuleItems from '../components/ModuleItems';
import ModuleList from '../helpers/ModuleList'

function Homeuser() {


  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      window.location.href = '/login';
    }
  }, []);

  return (
    <div className='Homeuser'>
       <div className='Sidebar'>


       </div>
       <div className='Dashboard'>
          <div className='welcomtext'>
              <div className='contenu'>
              <img src={profile}/>
              <p id='eddy'>Welcome Eddy!</p>
              <p id='Beginner'>Beginner</p>
              <p id='px'><OfflineBoltOutlinedIcon/> 0 px</p>
              </div>
             
            </div>
            <hr id='lineuser'/>
            <div className='foothomeuser'>
            <span>
              <h1 className='letslearn'>Let's learn and practice  <i><ArrowForwardIcon/></i></h1>
              <button id='getstart'>Get Started for Free </button>
            </span>
            <div className='moduleList'>
                  {ModuleList.map((moduleItem, key)=>{
                      return ( 
                      <ModuleItems 
                          key={key}
                          bg={moduleItem.background}
                          image={moduleItem.image} 
                          title={moduleItem.tilte}  
                          paragraphe={moduleItem.paragraphe}
                          /> )
                  })}
            </div>
          </div>
       </div>
       
    </div>
  )
}

export default Homeuser
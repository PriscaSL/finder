import React from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/Homeuser.css' 
import profile from '../assets/rakoto.jpg'
import BoltIcon from '@mui/icons-material/Bolt';


function Homeuser() {
  return (
    <div className='Homeuser'>
       <div className='Sidebar'>

       </div>
       <div className='Dashboard'>
            <div className='welcomtext'>
              <img src={profile}/>
              <p id='Beginner'>Beginner</p>
              <p id='px'><BoltIcon/> 0 px</p>
            </div>
       </div>
       
    </div>
  )
}

export default Homeuser
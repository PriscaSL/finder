import React from 'react'
import '../styles/Landing.css'
import imgland from '../assets/hero-img.png'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="landing" >
      <div className="partbody">

            <div className='textland'>
              <h1>The best way to <br/> learn</h1> 
              <button id='btnpurple'><Link to='/login'>Get started for free</Link></button>
              <p id='textland'>Join 300K+ members working in companies like</p>
              <div className='imagepartenaire'>
                <img src={imgland}/>
                <label>hhgg</label>
                <img src={imgland}/>
                <label>hhgg</label>
                <img src={imgland}/>
                <label>hhgg</label>
                <img src={imgland}/>
                <label>hhgg</label>
              </div>
            </div>

            <div className='imgland'>
                <img src={imgland}/>
            </div>
              
      </div>
        <div className="partfoot">
                <img src={imgland}/>
                <label>hhgg</label>
                <img src={imgland}/>
                <label>hhgg</label>
                <img src={imgland}/>
                <label>hhgg</label>
                <img src={imgland}/>
                <label>hhgg</label>
                <img src={imgland}/>
                <label>hhgg</label>
        </div>
    </div>
  )
}

export default Landing
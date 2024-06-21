import React from 'react'
import '../styles/Beginner.css'
import begin from '../assets/beginner.png'
import SearchBar from '../components/SearchBar'
import BeginnerItems from '../components/BeginnerItems'
import BeginnerList from '../helpers/BeginnerList'

function Beginner() {
  return (
    <div className='BeginnerParent'>
        <div className='Sidebar'>


        </div>
        <div className='DashBoard'>
        <div className='haut'>
                <div className='textbeginner'>
                    <SearchBar/>
                    <div className='textcontenu'>
                      <p id='titrebeginner'>Course</p>
                      <p id='txtbeginner'>Build a strong foundation in basic English grammar, vocabulary and pronunciation</p>
                      <div className='Niveau'>
                          <button id='begbtn' >Beginner</button>
                          <button id='begbtn'>Intermediate</button>
                          <button id='begbtn'>Advanced</button>
                      </div>
                     
                    </div>
                    <div id='linebeg' > <hr /></div>
                </div>
                <div className='imgbeginner'>
                     <img src={begin} alt='begin'/>
                </div>    
        </div>
        <div className='bas'>
        <div className='beginnerList'>
                  {BeginnerList.map((beginnerItem, key)=>{
                      return ( 
                      <BeginnerItems 
                          key={key}
                          imageb={beginnerItem.img} 
                          titleb={beginnerItem.titl}  
                          paragrapheb={beginnerItem.p}
                          /> )
                  })}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Beginner


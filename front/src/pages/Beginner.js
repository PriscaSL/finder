import React from 'react'
import '../styles/Beginner.css'
import begin from '../assets/beginner.png'
import SearchBar from '../components/SearchBar'
import BeginnerItems from '../components/BeginnerItems'
import BeginnerList from '../helpers/BeginnerList'
import NavBarDashboard from '../components/NavDashboard';
import Sidebar from '../components/Sidebar';


function Beginner() {


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
                      <div className='DashBoard'>
                        <div className='haut'>
                          <div className='textbeginner'>
                            <SearchBar />
                            <div className='textcontenu'>
                              <p id='titrebeginner'>Course</p>
                              <p id='txtbeginner'>Build a strong foundation in basic English grammar, vocabulary and pronunciation</p>
                              <div className='Niveau'>
                                <button className='begbtn beg-btn-active' >Beginner</button>
                                <button className='begbtn'>Intermediate</button>
                                <button className='begbtn'>Advanced</button>
                              </div>
                            </div>
                            <div id='linebeg' > <hr /></div>
                          </div>
                          <div className='imgbeginner'>
                            <img src={begin} alt='begin' />
                          </div>
                        </div>
                        <div className='bas'>
                          <div className='beginnerList'>
                            {BeginnerList.map((beginnerItem, key) => {
                              return (
                                <BeginnerItems
                                  key={key}
                                  imageb={beginnerItem.img}
                                  titleb={beginnerItem.titl}
                                  paragrapheb={beginnerItem.p}
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
    </>
  )
}

export default Beginner


import React, {useEffect, useState} from 'react'
import '../styles/Beginner.css'
import begin from '../assets/beginner.png'
import SearchBar from '../components/SearchBar'
import BeginnerItems from '../components/BeginnerItems'
import NavBarDashboard from '../components/NavDashboard';
import Sidebar from '../components/Sidebar';
import image1 from '../assets/Groupe 1.png'


function Beginner() {

  const MODULE_LIST_URL = "https://zahageek-back.onrender.com/api/glish/levels/";

  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      window.location.href = '/login';
    }

    const request = fetchModuleList(1);
    request.then((response) => {
      if (response.status === 200) {
        response.json().then((data) => {
          setModuleList(data);
        });
      } else {
        console.log("Error");
      }
    });
  }, []);

  const [ModuleList, setModuleList] = useState([]);

  const fetchModuleList = async (level_id) => {
    const myHeaders = new Headers();
    const token = sessionStorage.getItem('token');
    myHeaders.append("Authorization", "Bearer "+ token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    return await fetch(MODULE_LIST_URL + level_id + "/modules", requestOptions);
  }

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

                            {ModuleList.map((module, key) => {
                              return (
                                <BeginnerItems
                                  key={key}
                                  imageb={image1}
                                  titleb={module.name}
                                  paragrapheb={module.desc}
                                  module_id={module.id}
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


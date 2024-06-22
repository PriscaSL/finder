import React, { useState, useEffect } from 'react'
import '../styles/Beginner.css'
import Sary from '../assets/sary.png';
import SearchBar from '../components/SearchBar'
import NavBarDashboard from '../components/NavDashboard';
import Sidebar from '../components/Sidebar';
import SignalCellular1BarIcon from '@mui/icons-material/SignalCellular1Bar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import checkDisabled from '../assets/Icon awesome-check-circle-2.png';
import checkOk from "../assets/Icon awesome-check-circle-1.png";
import { useParams } from 'react-router-dom';


const Module = () => {

    const { id } = useParams();

    const [module, setModule] = useState([]);

    useEffect(() => {
        if (!sessionStorage.getItem('token')) {
            window.location.href = '/login';
        }

        const request = fetchModule();
        request.then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    setModule(data);
                });
            } else {
                console.log("Error");
            }
        });
    }, []);


    const MODULE_URL = "https://zahageek-back.onrender.com/api/glish/levels/modules/" + id + "/module_elements";


    const fetchModule = async () => {
        const myHeaders = new Headers();
        const token = sessionStorage.getItem('token');
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };
        return await fetch(MODULE_URL, requestOptions);
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
                                                            <p id='titrebeginner'>{module.length > 0 && module[0].module.name}</p>
                                                            <p id='txtbeginner'>{module.length > 0 && module[0].module.desc}</p>
                                                            <div className='mheader'>
                                                                <div><SignalCellular1BarIcon style={{ marginRight: "0.5em" }} /> Beginner</div>
                                                                <div><PlayArrowIcon style={{ marginRight: "0.5em" }} /> {module.length > 0 ?? '0'} Lessons</div>
                                                            </div>
                                                            <div className='mtitle'>
                                                                <h3>Start Course for free</h3>
                                                            </div>
                                                        </div>
                                                        <div id='linebeg' > <hr /></div>
                                                    </div>
                                                    <div className='mimgbeginner'>
                                                        <img src={Sary} alt='begin' />
                                                    </div>
                                                </div>
                                                <div className='bas'>
                                                    <div className='sous-module-list'>
                                                        {module.length > 0 && module.map((moduleItem, key) => {
                                                            return (

                                                                <div>
                                                                    <h3>{moduleItem.name}</h3>
                                                                    <button className='btn-start' onClick={(e) => window.location.href = "/module-item/" + moduleItem.id }>Start</button>
                                                                </div>
                                                            )
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

export default Module;
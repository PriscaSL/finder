import React from 'react'
import '../styles/Beginner.css'
import Sary from '../assets/sary.png';
import SearchBar from '../components/SearchBar'
import NavBarDashboard from '../components/NavDashboard';
import Sidebar from '../components/Sidebar';
import CheckIcon from '@mui/icons-material/Check';
import SignalCellular1BarIcon from '@mui/icons-material/SignalCellular1Bar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import checkDisabled from '../assets/Icon awesome-check-circle-2.png';
import checkOk from "../assets/Icon awesome-check-circle-1.png";


const Module = () => {
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
                                                            <p id='titrebeginner'>Introduction to English</p>
                                                            <p id='txtbeginner'>Build a strong foundation in basic English grammar, vocabulary and pronunciation. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, provident.</p>
                                                            <div className='mheader'>
                                                                <div><SignalCellular1BarIcon style={{marginRight: "0.5em"}}/> Beginner</div>
                                                                <div><PlayArrowIcon  style={{marginRight: "0.5em"}}/> 03 Lessons</div>
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
                                                        <div>
                                                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                                            <button className='btn-start'>Start</button>
                                                        </div>
                                                        <div>
                                                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                                            <img src={checkDisabled} className='check-img' alt="check" />
                                                        </div>
                                                        <div>
                                                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                                                            <img src={checkOk} className='check-img' alt="check" />
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

export default Module;
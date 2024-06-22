import React from 'react'
import '../styles/Beginner.css'
import Sary from '../assets/sary.png';
import NavBarDashboard from '../components/NavDashboard';
import Sidebar from '../components/Sidebar';
import SignalCellular1BarIcon from '@mui/icons-material/SignalCellular1Bar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import IconGlish from '../assets/ICONE GLISH.png';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Rakoto from '../assets/rakoto.jpg';

const Quiz = ({ module }) => {
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
                                                <div className='haut-perso'>
                                                    <div className='textbeginner'>
                                                        <div className='textcontenu'>
                                                            <p id='titrebeginner'>Quiz : Introduction to English</p>
                                                            <p id='txtbeginner'>
                                                            Try to answer questions via prompt or voice recognition.</p>
                                                            <div className='mheader'>
                                                                <div><SignalCellular1BarIcon style={{ marginRight: "0.5em" }} /> Beginner</div>
                                                                <div><PlayArrowIcon style={{ marginRight: "0.5em" }} /> 03 Lessons</div>
                                                            </div>
                                                            <div className='mtitle'>
                                                                <h3>Continue Learning</h3>
                                                            </div>
                                                        </div>
                                                        <div id='linebeg' > <hr /></div>
                                                    </div>
                                                    <div className='mimgbeginner'>
                                                        <img src={Sary} alt='begin' />
                                                    </div>
                                                </div>
                                                <div className='my-scrollable'>
                                                    <div className='ia-response'>
                                                        <div className='ia-icon'>
                                                            <img src={IconGlish} alt="ia" />
                                                        </div>
                                                        <div className='ia-text'>
                                                            <h3>Lorem ipsum dolor sit amet.</h3>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores placeat,
                                                                non vitae molestiae eligendi! Dolore omnis, quam nihil veniam quo libero
                                                                ut soluta reprehenderit eum a doloremque ad adipisci?</p>
                                                            <div className='ia-text-footer'>
                                                                <div>
                                                                    <VolumeUpIcon />
                                                                    <ContentCopyIcon />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='person-response'>
                                                        <div className='person-icon'>
                                                            <img src={Rakoto} alt="ia" />
                                                        </div>
                                                        <div className='person-text'>
                                                            <h3>Lorem ipsum dolor sit amet.</h3>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores placeat,
                                                                non vitae molestiae eligendi! Dolore omnis, quam nihil veniam quo libero
                                                                ut soluta reprehenderit eum a doloremque ad adipisci?</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='prompt-input'>
                                                    <KeyboardVoiceIcon />
                                                    <input type='text' className='prompti' placeholder='Type your answer here or answer by speech recognition' />
                                                    <ArrowCircleUpIcon />
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


export default Quiz;
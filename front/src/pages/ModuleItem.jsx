import React, {useState, useEffect } from 'react'
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
import { useParams } from 'react-router-dom';


const ModuleItem = () => {

    const { id } = useParams();

    const [moduleItem, setModuleItem] = useState({});

    const [html, setHtml] = useState("");

    useEffect(() => {
        if (!sessionStorage.getItem('token')) {
            window.location.href = '/login';
        }

        const request = fetchModuleItem();
        request.then((response) => {
            if (response.status === 200) {
                response.json().then((data) => {
                    setModuleItem(data);
                    // get lessons from prompt
                    const req_lessons = fetchLessons(data.name);
                    req_lessons.then((response) => response.json())
                    .then((data) => {
                        if (data.status === true) {
                            console.log(data);
                        } else {
                            console.log("Error");
                        }
                    })
                });
            } else {
                console.log("Error");
            }
        });
    }, []);


    const MODULE_URL = "https://zahageek-back.onrender.com/api/glish/levels/modules/module_elements/" + id;


    const fetchModuleItem = async () => {
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
    
    const LECON_URL = "https://zahageek-back.onrender.com/api/glish/lessons?prompt=";

    const fetchLessons = async (prompt) => {
        const myHeaders = new Headers();
        const token = sessionStorage.getItem('token');
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };
        return await fetch(LECON_URL + prompt, requestOptions);
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
                                                <div className='haut-perso'>
                                                    <div className='textbeginner'>
                                                        <div className='textcontenu'>
                                                            <p id='titrebeginner'>{moduleItem && moduleItem.order} - {moduleItem && moduleItem.name}</p>
                                                            <p id='txtbeginner'>{moduleItem && moduleItem.desc}</p>
                                                            <div className='mheader'>
                                                                <div><SignalCellular1BarIcon style={{ marginRight: "0.5em" }} /> Beginner</div>
                                                                <div><PlayArrowIcon style={{ marginRight: "0.5em" }} /> 3 Lessons</div>
                                                            </div>
                                                            <div className='mtitle'>
                                                                <h3>Start Quiz +75 px</h3>
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
                                                    <input type='text' className='prompti' placeholder='Type your answer here' />
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


export default ModuleItem;
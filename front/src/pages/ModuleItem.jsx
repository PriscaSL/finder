import React, { useState, useEffect, useRef } from 'react'
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

import Preloader from '../components/Preloader';
//import CircularProgress from '@mui/material/CircularProgress';

/*const Loading = ()  => {
    return (
        <div style={{margin: "auto"}}>
            <CircularProgress />
        </div>
    );
}*/

const ModuleItem = () => {

    const { id } = useParams();

    const [moduleItem, setModuleItem] = useState({});

    const [chat, setChat] = useState([]);

    const [html, setHtml] = useState('');

    const [question, setQuestion] = useState("");

    const [count, setCount] = useState(0);

    const [isLoading, setIsLoading] = useState(true);


    // Ref to the chat container for scrolling
    const chatContainerRef = useRef(null);

    //const [loading, setLoading] = useState(false);


    const handleAskQuestion = async () => {
        // Ajouter la question de l'utilisateur au chat
        const newChat = [...chat, { user: "user", message: question }];
        setChat(newChat);
        
        // Réinitialiser la question dans le state
        setQuestion('');
    
        try {
            // Effectuer la requête pour obtenir la réponse de l'API
            const response = await fetchQuestion(question);
            const data = await response.json();
    
            // Ajouter la réponse de l'API au chat en conservant l'ancien état de chat
            setChat(prevChat => [...prevChat, { user: "IA", message: data.body_content }]);
        } catch (error) {
            console.error('Error fetching question:', error);
        }
    };

    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAskQuestion();
        }
    }

    const QUESTION_URL = "http://127.0.0.1:8000/api/glish/questions?prompt='";

    const fetchQuestion = async (question) => {
        const myHeaders = new Headers();
        const token = sessionStorage.getItem('token');
        myHeaders.append("Authorization", "Bearer " + token);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };
        return await fetch(QUESTION_URL + question + "'&theme='" + moduleItem.name + "'", requestOptions);
    }

    useEffect(() => {
        if (!sessionStorage.getItem('token')) {
            window.location.href = '/login';
        }

        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }

        if(count === 0) {

            setTimeout(() => {
                setIsLoading(false);
            }, 3000);

           // setLoading(true);
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
                                    //console.log(data);
                                    setChat([...chat, {user: "IA", message: data.body_content}]);

                                    /*setTimeout(() => {
                                        setLoading(false);
                                    }, 2000);*/
                                    //setHtml(data.body_content)
                                } else {
                                    //setLoading(false);
                                    console.log("Error");
                                }
                            })
                    });
                } else {
                    //setLoading(false);
                    console.log("Error");
                }
            });
            setCount(1);
        }
        
    }, [chat]);


    const MODULE_URL = "http://127.0.0.1:8000/api/glish/levels/modules/module_elements/" + id;


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


    const LECON_URL = "http://127.0.0.1:8000/api/glish/lessons?prompt=";

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

                                                    {chat.map((item, key) => { 
                                                        if (item.user === "user") {
                                                            return (
                                                                <div className='person-response' key={key}>
                                                                    <div className='person-icon'>
                                                                        <img src={Rakoto} alt="ia" />
                                                                    </div>
                                                                    <div className='person-text'>
                                                                        <div dangerouslySetInnerHTML={{ __html: item.message }} />
                                                                    </div>
                                                                </div>
                                                            );
                                                        } else {
                                                            return (
                                                                <div className='ia-response' key={key}>
                                                                    <div className='ia-icon'>
                                                                        <img src={IconGlish} alt="ia" />
                                                                    </div>
                                                                    <div className='ia-text'>
                                                                    <div dangerouslySetInnerHTML={{ __html: item.message }} />
                                                                        <div className='ia-text-footer'>
                                                                            <div>
                                                                                <VolumeUpIcon />
                                                                                <ContentCopyIcon />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    })}
                                                    {/*loading && <Loading/>*/}
                                                </div>

                                                <div className='prompt-input'>
                                                    <KeyboardVoiceIcon />
                                                    <input type='text' className='prompti' placeholder='Ask Questions...' value={question} onChange={(e) => setQuestion(e.target.value)} onKeyPress={onKeyPress} />
                                                    <ArrowCircleUpIcon onClick={(e) => handleAskQuestion()}/>
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
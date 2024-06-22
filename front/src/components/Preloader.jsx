import "../styles/Preloader.css";
import Icon_glish from "../assets/ICONE GLISH.png";

const Preloader = () => {
    return (
        <div className="fullscreen">
            <div className="preloader">
                <img src={Icon_glish} alt="Logo"/>
            </div>
        </div>
    );
    }

export default Preloader;
import { useEffect, useState } from "react";

import './Landing.scss';
import portrait from '../../images/portrait.png';

function Landing() {
    const [ currentText, setCurrentText ] = useState('');
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ displayBio, setDisplayBio ] = useState(false);

    let welcomeMsg = `Hello, I am Eduardo Franco`;

    useEffect(() => {
        if(currentIndex < welcomeMsg.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + welcomeMsg[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1)
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            setDisplayBio(true)
        }
    }, [currentIndex, welcomeMsg]);
    
    return(
        <div className="landing" id="landing" name="landing" style={{flex: 5}}>
            <div className="portrait-container" style={displayBio ? {visibility:'visible', opacity:1 } : {visibility: 'hidden', opacity: 0}}>
                <img alt="eduardo franco headshot" src={portrait} />
            </div>
            <div className="bio-text">
                <h1>{currentText}</h1>
                <div style={displayBio ? {visibility:'visible', opacity:1 } : {visibility: 'hidden', opacity: 0}}>
                        <h2 style={{color:'#3fff'}}>Front End Developer</h2> 
                        <p>Front end developer with experience working on <a href="https://www.exploratorium.edu/" target="_blank" rel="noreferrer">exploratorium.edu</a>, <a href="https://athleta.gap.com/" target="_blank" rel="noreferrer">athleta.gap.com</a>, and most recently launching <a href="https://www.markandgraham.ca/" target="_blank" rel="noreferrer">markandgraham.ca</a>. Currently working on WIlliams-Sonoma's cross-brand design system components (Williams-Sonoma, Pottery Barn, West Elm, Rejuvenation, Mark and Graham). </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/edfrancocano/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/edfranco/" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-github"></i></a>
                            <a href="mailto:edfrancodevelopment@gmail.com/" target="_blank" rel="noreferrer"><i class="fa-regular fa-envelope"></i></a>
                        </div>
                </div>
            </div>
      </div>
    );
}

export default Landing;

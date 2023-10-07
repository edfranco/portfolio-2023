import { useEffect, useState } from "react";

import './Landing.scss';
import portrait from '../../images/portrait.png';

function Landing() {
    const [ currentText, setCurrentText ] = useState('');
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ displayBio, setDisplayBio ] = useState(false);

    let welcomeMsg = 'Hello, I am Eduardo Franco';

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
        <div className="landing" style={{flex: 5, display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div className="portrait-container" style={displayBio ? {visibility:'visible', opacity:1 } : {visibility: 'hidden', opacity: 0}}>
                <img alt="eduardo franco headshot" src={portrait} />
            </div>
            <div className="bio-text">
                <h1>{currentText}</h1>
                <div style={displayBio ? {visibility:'visible', opacity:1 } : {visibility: 'hidden', opacity: 0}}>
                        <h2>Front End Developer</h2> 
                        <p>Front end developer with experience working on exploratorium.edu, gap.com, and most recently launching markandgraham.ca. Currently working on WIlliams-Sonoma's cross-brand design system components (Williams-Sonoma, Pottery Barn, West Elm, Rejuvenation, Mark and Graham). </p>
                </div>
            </div>
      </div>
    );
}

export default Landing;

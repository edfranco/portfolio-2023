import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
    return (
        <div className="nav">
            <ul>
                <a href="/#landing">Home</a>
                <a href="/#experience-container">Experience</a>
                {/* <a href="/#experience-container">Portfolio</a>
                <a href="/#misc">Misc</a>
                <a href="/#experience-container">Contact</a> */}
            </ul>
      </div>
    );
}

export default Nav;

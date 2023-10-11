import './Nav.scss';

function Nav(props) {
    return (
        <div className="nav">
            <ul className="desktop-nav-links">
                <a href="/#landing">Home</a>
                <a href="/#experience-container">Experience</a>
                {/* <a href="/#experience-container">Portfolio</a>
                <a href="/#misc">Misc</a>
                <a href="/#experience-container">Contact</a> */}
            </ul>
            <ul className="mobile-nav-links" style={
                props.shouldDisplayNav 
                ? {display:'flex'} 
                : {display:'none'}}>
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

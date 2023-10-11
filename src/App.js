import { useState } from 'react';

import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import ExperienceContainer from './containers/ExperienceContainer/ExperienceContainer';

import './App.scss';

function App() {
  const [shouldDisplayNav, setDisplayNav] = useState(false)
  const handleHamburgerClick = () => {
    setDisplayNav(!shouldDisplayNav);
  }
  return (
    <div className="app">
      <div className='hamburger-button' onClick={handleHamburgerClick}>
        {shouldDisplayNav ? 'X' : "|||"}
        </div>
      <Nav shouldDisplayNav={shouldDisplayNav}/>
      <main>
        <Landing />
        <ExperienceContainer />
      </main>
    </div>
  );
}

export default App;

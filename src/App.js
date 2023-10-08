import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import ExperienceContainer from './containers/ExperienceContainer/ExperienceContainer';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Landing />
        <ExperienceContainer />
        <div id="misc" style={{minHeight:'100vh'}}></div>
      </main>
    </div>
  );
}

export default App;

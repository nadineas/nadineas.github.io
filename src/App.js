import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import About from './components/about';
import Experience from './components/experience';
import Skills from './components/skills';
import Work from './components/work';



function App() {
  return (
    <div id="colorlib-page">
        <div class="container-wrap">
          <Navigation></Navigation>
          <div id="colorlib-main">
            <About></About>
            <Skills></Skills>
            <Experience></Experience>
            <Work></Work>
          </div>
        </div>
      </div>
  );
}

export default App;

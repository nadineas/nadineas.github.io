import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import Hero from './components/hero';
import About from './components/about';
import Blog from './components/blog';
import Contact from './components/contact';
import Counter from './components/counter';
import Education from './components/education';
import Experience from './components/experience';
import Services from './components/services';
import Skills from './components/skills';
import Work from './components/work';



function App() {
  return (
    <div id="colorlib-page">
        <div class="container-wrap">
          <Navigation></Navigation>
          <div id="colorlib-main">
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Experience></Experience>
            <Education></Education>
            <Services></Services>
            <Blog></Blog>
            <Counter></Counter>
            <Work></Work>
            <Contact></Contact>
          </div>
        </div>
      </div>
  );
}

export default App;

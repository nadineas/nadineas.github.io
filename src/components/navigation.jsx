import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
        <div>
          <a href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Nadine Siddharta</a></h1>
              <span className="position"></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                  <li><a href="#experience" data-nav-section="experience">Resume</a></li>
                  <li><a href="#work" data-nav-section="work">Projects</a></li>
                </ul>
              </div>
            </nav>
            <div className="colorlib-footer">
              <ul>
              <li><a href="mailto:nadinea.siddharta@gmail.com"><i className="icon-mail" style={{fontSize: 30, color:"lightsteelblue"}} /></a></li>
              <li><a href="https://www.linkedin.com/in/nadinesiddharta/"><i className="icon-linkedin2" style={{fontSize: 30, color:"lightsteelblue"}} /></a></li>
                <li><a href="https://github.com/nadineas"><i className="icon-github" style={{fontSize: 30, color:"lightsteelblue"}} /></a></li>
              </ul>
              <p><small> {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Template by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>, built with React
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}  <span>Copyright © Nadine Siddharta 2020</span></small></p>
            </div>
          </aside>
        </div>
);
}
}
import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
        <div>
            <section className="colorlib-skills" data-section="skills">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <h2 className="colorlib-heading animate-box">My Skills</h2>
            </div>
          </div>
          <div className="skills-desc"><h8>Relevant Coursework:</h8> 
           <span> Discrete Structures, Software Design, Data Structures, Intro to Computing, Intro to Electronics, Linear Algebra, Intro to Differential Equations Plus</span>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>Java</h3>
                <div className="progress">
                  <div className="progress-bar color-1" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>C++</h3>
                <div className="progress">
                  <div className="progress-bar color-2" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>Python</h3>
                <div className="progress">
                  <div className="progress-bar color-3" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>React.js</h3>
                <div className="progress">
                  <div className="progress-bar color-4" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>HTML</h3>
                <div className="progress">
                  <div className="progress-bar color-5" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>CSS</h3>
                <div className="progress">
                  <div className="progress-bar color-1" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>Github</h3>
                <div className="progress">
                  <div className="progress-bar color-2" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>Linux/Bash</h3>
                <div className="progress">
                  <div className="progress-bar color-3" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>Visual Studio Code</h3>
                <div className="progress">
                  <div className="progress-bar color-4" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>IntelliJ</h3>
                <div className="progress">
                  <div className="progress-bar color-5" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
        );
    }
  }
import React, { Component } from "react";

export default class Work extends Component {
  render() {
    return (
        <div><section className="colorlib-work" data-section="work">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <h2 className="colorlib-heading animate-box">My Recent Work</h2>
            </div>
          </div>
          <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
            <div className="col-md-12">
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="project" style={{backgroundImage: 'url(images/img-1.png)'}}>
                <div className="desc">
                  <div className="con">
                    <h3><a href="work.html">Magic 8 Ball Model</a></h3>
                    <span>I created a small moving model of a Magic 8 Ball where the user can input a question and the modelled magic 8 ball will shake and output an answer.</span>
                    <p></p>
                    <span style={{fontStyle:"italic"}}> Stack: VPython </span>
                    <p className="icon">
                      <span><a href="https://github.com/nadineas/Magic8Ball"><i className="icon-github" /></a></span>
                      <span><a href="https://www.youtube.com/watch?v=48s7Frn-T0o"><i className="icon-youtube" /></a></span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
              <div className="project" style={{backgroundImage: 'url(images/img-2.png)'}}>
                <div className="desc">
                  <div className="con">
                    <h3><a href="work.html">Roller Coaster Model</a></h3>
                    <span>I created an animated model of a physical rollercoaster I made for my high school physics class. This animated model models a marble rolling down the rollercoaster.</span>
                    <p></p>
                    <span style={{fontStyle:"italic"}}> Stack: VPython </span>
                    <p className="icon">
                    <span><a href="https://github.com/nadineas/Rollercoaster-Model"><i className="icon-github" /></a></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
              <div className="project" style={{backgroundImage: 'url(images/img-3.png)'}}>
                <div className="desc">
                  <div className="con">
                    <h3><a href="work.html">Personal Website</a></h3>
                    <span>I made a personal portfolio website to showcase my work as well as learn more about web development. This was my first time building a website using react as well as working with HTML and CSS. To help build the website I used a template provided by Colorlib and rendered the file in react. I then used Github Pages to host the site.</span>
                    <span style={{fontStyle:"italic"}}> Stack: React, HTML, CSS </span>
                    <p className="icon">
                      <span><a href="https://github.com/nadineas/nadineas.github.io"><i className="icon-github" /></a></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
              <div className="project" style={{backgroundImage: 'url(images/img-4.png)'}}>
                <div className="desc">
                  <div className="con">
                    <h3><a href="work.html">Dante's Inferno Themed Text Adventure</a></h3>
                    <span>For my Software Design Course, I created a text adventure game based on Dante's Inferno. The text adventure game parses through various JSON files based on Inferno from Dante's Divine Comedy and uses those files to set up the narrative text adventure outputted to the user.</span>
                    <p></p>
                    <span style={{fontStyle:"italic"}}> Stack: Java, JSON</span>
                    <p className="icon">
                      <span><a href="https://github.com/CS126SP20/amazing-adventures-nadineas"><i className="icon-github" /></a></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></div>
        );
    }
  }
import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
        <div><section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                  <div className="about-desc">
                    <h2 className="colorlib-heading">About</h2>
                    <p>Hello there, I'm Nadine!</p>
                    <p>I am a current sophomore at the <u><a href="https://grainger.illinois.edu/">University of Illinois at Urbana Champaign</a></u> 
                    studying Computer Engineering. My interests currently revolve around the applications of software to other fields: specifically the 
                    intersection between coding and literature as well as the application of software to model scientific processes<sup><span style={{color:"#9DD9D2"}}>1</span></sup>, which I have 
                    explored through some of my most <u><a href="#work">recent projects</a></u>. While I am relatively new to the world of tech and software<sup><span style={{color:"#9DD9D2"}}>2</span></sup>, I am excited to 
                    learn more and intend to specialize in Artificial Intelligence and Big Data Analytics. In the (hopefully near) future, I aspire to 
                    become a back-end or full-stack developer.</p>

                    Aside from tech, I enjoy <u><a href="https://www.goodreads.com/review/list/120685089-nadine-s?ref=nav_mybooks&shelf=currently-reading">reading</a></u> and trying out new pasta recipes. Nice to meet you!
                    <p></p>
                    <p><sup><span style={{color:"#9DD9D2"}}>1</span></sup>  <span style={{fontSize:"13px", color:"#9DD9D2"}}>For as long as I can remember, the ability to understand the world at the molecular level and create materials that build our society and life today fascinated me. This fascination led to my five-month research project surrounding the development of bioplastics from bio waste, and ultimately my summer research internship at the chemical company, BASF.</span></p>
                    <p><sup><span style={{color:"#9DD9D2"}}>2</span></sup>  <span style={{fontSize:"13px", color:"#9DD9D2"}}>I first started coding during my sophomore year of high school, however, I didn't know that I wanted to pursue the tech field until very 
                    recently (I declared Computer Engineering as my major in the spring of my freshman year!).</span></p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                  <div className="services color-1">
                    <span className="icon2"><i className="icon-mail" /></span>
                    <h3><a href="mailto:nadinea.siddharta@gmail.com">Email</a></h3>
                    <div className="colorlib-text">
                </div>
                  </div>
                </div>
                <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                  <div className="services color-2">
                    <span className="icon2"><i className="icon-linkedin2" /></span>
                    <h3><a href="https://www.linkedin.com/in/nadinesiddharta/">Linkedin</a></h3>
                  </div>
                </div>
                <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                  <div className="services color-3">
                    <span className="icon2"><i className="icon-github" /></span>
                    <h3><a href="https://github.com/nadineas">Github</a></h3>
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
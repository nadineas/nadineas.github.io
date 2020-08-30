import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
        <div> <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <h2 className="colorlib-heading animate-box">Resume</h2>
            </div>
          </div>
          <div className="skills-desc">
          <i className="icon-file-pdf" style={{fontSize: 30, color:"lightsteelblue"}} />
          <h8><a href="NadineSiddhartaResume.pdf" download="NadineSiddhartaResume"> Click here to download my resume!</a></h8>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-1">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#education">University of Illinois at Urbana-Champaign</a> <span>2019-2023</span></h2>
                      <span style={{fontStyle:"italic"}}>Bachelor of Science - BS, Computer Engineering</span>
                      <p></p>
                      <span>Activities and Societies: Pulse 2021, WECE, Kappa Phi Lambda Sorority, Inc.</span>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-2">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#education">Singapore American School </a> <span>2016-2019</span></h2>
                      <span style={{fontStyle:"italic"}}>High School Diploma, Cum Laude</span>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <i className="icon-briefcase" />
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#work">BASF Chemicals Company</a> <span>July - August 2018</span></h2>
                      <span style={{fontStyle:"italic"}}>Summer Research Intern</span>
                      <p></p>
                      <ul>
                      <li>Tested and conducted product checks under the Polymer Dispersion Quality Assurance & Process Lab to
test efficacy of adhesives and paint products</li>
                      <li>Investigated and interpreted tests to help improve product quality such as decreasing opacity for desired
adhesives through researching and testing effects of altering pH on polymer bonds</li>
                      </ul> 
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-4">
                      <i className="icon-briefcase" />
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#research">Biodegradable Waste Based Bioplastic Research Project </a> <span>January - May 2018</span></h2>
                      <span style={{fontStyle:"italic"}}>Independent Research Author</span>
                      <p></p>
                      <ul>
                      <li>Designed research project regarding development of bioplastics from biodegradable waste such as banana peels</li>
                      <li>Implemented and conducted trials to develop sample of bioplastic material that was water-resistant and had functional tensile strength</li>
                      <li>Amended trials to increase tensile strength of sample material by 49.7%</li>
                      <li>Presented newly developed material and authored research paper to panel of judges, mentors, and teachers</li>
                      </ul> 
                    </div>
                  </div>
                </article>
                <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none">
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section></div>
        );
    }
  }
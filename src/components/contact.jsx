import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
        <div><section className="colorlib-contact" data-section="contact">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <h2 className="colorlib-heading">Get in Touch</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="colorlib-icon">
                  <i className="icon-mail" ></i>
                </div>
                <div className="colorlib-text">
                  <p><a href="mailto:nadinea.siddharta@gmail.com">nadinea.siddharta@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></div>
        );
    }
  }
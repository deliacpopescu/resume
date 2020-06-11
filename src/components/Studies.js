import React, {Component} from "react";
import "./Studies.css";

class Studies extends Component {
  render() {
    return (
      <div className="d-flex p-3">
        <div className="container h-100 overlay-with-background align-self-center rounded p-5">
          <div className="row text-black-50 p-2">
            <div className="container">
              <h4 className="font-weight-bold font-italic mb-4">Studies</h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="main-timeline4 overflow-auto">
                    <div className="timeline">
                      <a href="#" className="timeline-content">
                        <span className="year">2019</span>
                        <div className="inner-content">
                          <h3 className="title">Front-End Developer</h3>
                          <p className="description">
                            The Informal School of IT
                          </p>
                          <p className="description">
                            Skills acquired : OOP, Web Introduction, HTML, CSS, JavaScript, DOM Manipulation, React,
                            Bootstrap, AJAX, Git
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="timeline">
                      <a href="#" className="timeline-content">
                        <span className="year">2019</span>
                        <div className="inner-content">
                          <h3 className="title">Certificate of completion / UDEMY</h3>
                          <p className="description">
                            The Complete JavaScript Course 2020: Build Real Projects!
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="timeline">
                      <a href="#" className="timeline-content">
                        <span className="year">2019</span>
                        <div className="inner-content">
                          <h3 className="title">Certificate of completion / UDEMY</h3>
                          <p className="description">
                            HTML , CSS, Flexbox, CSS Grid
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="timeline">
                      <a href="#" className="timeline-content">
                        <span className="year">2014</span>
                        <div className="inner-content">
                          <h3 className="title">Bachelor’s degree in pharmacy / Universitatea de medicina si farmacie “Iuliu Hatieganu”, Cluj-Napoca</h3>
                          <p className="description">
                            Organic chemestry, therapeutic chemistry, pharmacology, toxicology
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="timeline">
                      <a href="#" className="timeline-content">
                        <span className="year">2009</span>
                        <div className="inner-content">
                          <h3 className="title">High School Diploma / Mathematics and Informatics</h3>
                          <p className="description">
                            “Mihai Viteazu” High School, Turda
                          </p>
                          <p className="description">
                            Certificate of professional competence: Computer Operating and Mid-Level Programing Skills
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*<h4>My Skills</h4>*/}
              {/*<div className="progress">*/}
              {/*  <div className="progress-bar bg-info" id="bar" role="progressbar" aria-valuenow="50"*/}
              {/*       aria-valuemin="0" aria-valuemax="100">*/}
              {/*    /!*cu #bar -width:20% modific cat se incarca culoarea*!/*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Studies;
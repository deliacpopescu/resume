import React, {Component} from "react";
import "./WorkExperience.css";

class WorkExperience extends Component {
  render() {
    return (
      <div  id="experience" className="d-flex h-100">
        <div   className="container my-auto overlay-with-background align-self-center rounded">
          <div className="row text-black-50 p-4">
            <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <h4 className="font-weight-bold mb-4">Work Experience</h4>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-icon "></div>
                      <div className="timeline-contents">
                        <div className="time-line-header">
                          <h6 className="timeline-title font-weight-bold">Pharmacist</h6>
                          <p className="timeline-year font-italic">July 2018</p>
                        </div>
                        <div className="timeline-content">
                          <p>Release of prescription and over the counter drugs;
                          preparation, preservetion , release of main officinal products;
                         control of pharmacy activity in the absence of the leading pharmacist</p>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon "></div>
                      <div className="timeline-contents">
                        <div className="time-line-header">
                          <h6 className="timeline-title font-weight-bold">Pharmacist</h6>
                          <p className="timeline-year font-italic">October 2014 to July 2018</p>
                        </div>
                        <div className="timeline-content">
                          <p>Release of prescription and over the counter drugs;
                            preparation, preservetion , release of main officinal products;
                            control of pharmacy activity in the absence of the leading pharmacist</p>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-icon "></div>
                      <div className="timeline-contents">
                        <div className="time-line-header">
                          <h6 className="timeline-title font-weight-bold">Practical Internship</h6>
                          <p className="timeline-year font-italic">October 2013 to October 2014</p>
                        </div>
                        <div className="timeline-content">
                          <p>Qualitative and quantitative reception of medicinal products and other products for human use;
                            tracking and monitpring the validity terms of pharmaceutical and hygienic-cosmetic products;
                            centralization of free and compensated medical prescriptions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default WorkExperience;
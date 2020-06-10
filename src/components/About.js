import React, {Component} from "react";
import "./About.css";
import nico from "../Images/nico.jpeg";

class About extends Component {
  render() {
    return (
      <div className="d-flex vh-100">
        <div className="container overlay-with-background align-self-center rounded">
          <div className="row text-black-50 p-4">
            <div className="col-lg-3">
              <img src={nico} className="picture " alt="pic"/>
            </div>
            <div className="col-lg-9 text-center my-auto info">
              <h1 className=" row justify-content-center font-weight-bold">Front-End Web Developer</h1>
              <div className="row p-5 information">
                <div className="col-6 text-left">
                  <h5 className="font-weight-bold">Name :<span className="font-weight-normal">Delia Popescu</span></h5>
                  <h5 className="font-weight-bold">Birtday : <span className="font-weight-normal">30.09.1990</span></h5>
                  <h5 className="font-weight-bold">City : <span className="font-weight-normal">Cluj-Napoca</span></h5>
                </div>
                <div className=" col-6 text-left">
                  <h5 className="font-weight-bold">Phone : <span className="font-weight-normal">+40 741000000</span></h5>
                  <h5 className="font-weight-bold">Email : <span className="font-weight-normal">deliabuze@gmail.com</span></h5>
                  <h5 className="font-weight-bold">Degre : <span className="font-weight-normal">Bachelor's degree</span></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default About;
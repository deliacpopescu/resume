import React, {Component} from "react";
import "./About.css";
import me from "../Images/me.jpeg";

class About extends Component {
  render() {
    return (
      <div id="all" className="d-flex h-100">
        <div id="about" className="container overlay-with-background align-self-center rounded">
          <div className="row text-black-50 p-4">
            <div className="col-xl-4 ">
              <img src={me} className="picture " alt="pic"/>
            </div>
            <div className="col-xl-8 text-center my-auto info">
              <h1 className=" row justify-content-center font-weight-bold my-4">Front-End Web Developer</h1>
              <div className="row  information ">
                <div className="col-xl-6 text-left">
                  <h5 className="font-weight-bold">Name : <span className="font-weight-normal">Delia Popescu</span></h5>
                  <h5 className="font-weight-bold">Birtday : <span className="font-weight-normal">30.09.1990</span></h5>
                  <h5 className="font-weight-bold">City : <span className="font-weight-normal">Cluj-Napoca</span></h5>
                </div>
                <div className=" col-xl-6 text-left">
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
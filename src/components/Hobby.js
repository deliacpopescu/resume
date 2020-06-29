import React, {Component} from "react";
import "./Hobby.css";

class Hobby extends Component {
  render() {
    return (
      <div className="d-flex vh-100">
        <div className="container overlay-with-background align-self-center rounded">
          <h4 className="font-weight-bold font-italic m-4">Hobbies</h4>
          <div className="row text-black-50 p-4 justify-content-center">
            <div className="col-lg-3 text-center text-md-left m-2  ">
              <div className="item shadow-sm rounded-lg">
                <div className="text-center p-4">
                  Gardening
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center text-md-left m-2">
              <div className="item shadow-sm rounded-lg">
                <div className="text-center p-4">
                  Cycling
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center text-md-left m-2">
              <div className="item shadow-sm rounded-lg">
                <div className="text-center p-4">
                  Cooking
                </div>
              </div>
            </div>
          </div>
          <div className="row text-black-50 p-4 justify-content-center">
            <div className="col-lg-3 text-center text-md-left m-2  ">
              <div className="item shadow-sm rounded-lg">
                <div className="text-center p-4">
                  Driving
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center text-md-left m-2">
              <div className="item shadow-sm rounded-lg">
                <div className="text-center p-4">
                  Traveling / Trips
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center text-md-left m-2">
              <div className="item shadow-sm rounded-lg">
                <div className="text-center p-4">
                  Playing with my son
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hobby;
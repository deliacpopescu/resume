import React, {Component} from "react";

class Languages extends Component {
  render() {
    return (
      <div className="d-flex vh-100">
        <div className="container overlay-with-background align-self-center rounded">
          <h4 className="font-weight-bold font-italic m-4">Languages</h4>
          <div className="row text-black-50 p-4 justify-content-center">
            <div className="col-lg-3 text-center text-md-left p-4">
            <div className="item shadow-sm rounded-lg">
              <h6 className="text-center font-weight-bold p-4 m-0">English</h6>
              <p className="font-italic text-center m-0">Independent User</p>
            </div>
          </div>
            <div className="col-lg-3 text-center text-md-left  p-4 ">
              <div className="item shadow-sm rounded-lg">
                <h6 className="text-center font-weight-bold p-4 m-0">French</h6>
                <p className="font-italic text-center m-0">Basic User</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Languages;
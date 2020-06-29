import React, {Component} from "react";
import "./Home.css";
import TextTyping from "./TextTyping";

class Home extends Component {
  render() {
    return (
      <div className="container d-inline-flex justify-content-center typingText">
        <div className="d-flex vh-100 col-10">
          <div className="container align-self-center ">
            <div className=" p-4 typingColor">
              <h3 className="font-weight-bold">I'M DELIA</h3>
            </div>
            <div className="typingColor">
              <TextTyping dataText={["I\'M A WEB DEVELOPER"]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
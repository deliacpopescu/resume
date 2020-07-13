import React, {Component} from "react";
import "./MediaSideBar.css";

class MediaSideBar extends Component {
  render() {
    return (
      <div id="media-icons" className="position-relative my-auto  col-1">
        <span className="overlay" id="follow">Follow Me</span>
        <div className="overlay icons ">
          <a href="https://www.facebook.com/">
            <i className="fab fa-facebook m-3"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram-square m-3"></i>
          </a>
          <a href="https://www.linkedin.com/feed/">
            <i className="fab fa-linkedin m-3"></i>
          </a>
          <a href="https://github.com/deliacpopescu">
            <i className="fab fa-github m-3"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default MediaSideBar;
import React, {Component} from "react";
import ReactTooltip from "react-tooltip";
import "./PagesSideBar.css";
import {Link} from "react-router-dom";

class PagesSideBar extends Component {


  render() {
    return (
      <div id='sidebar' className="position-relative col-1 my-auto text-white text-center pl-4">
        <ul className="sidebar-list overlay">
          <div >
            <Link to="/">
              <li id="sideBar" data-tip='' data-for="registerTip1">
              </li>
            </Link>
            <ReactTooltip id="registerTip1" place="left" effect="float" >Home</ReactTooltip>
          </div>

          <div className="position-relative">
            <Link to="About">
              <li id="sideBar" data-tip='' data-for="registerTip2">
              </li>
            </Link>
            <ReactTooltip id="registerTip2" place="left" effect="float">About</ReactTooltip>
          </div>

          <div className="position-relative">
            <Link to="Studies">
              <li id="sideBar" data-tip='' data-for="registerTip3">
              </li>
            </Link>
            <ReactTooltip id="registerTip3" place="left" effect="float">Studies</ReactTooltip>
          </div>

          <div className="position-relative">
            <Link to="WorkExperience">
              <li id="sideBar" data-tip='' data-for="registerTip4">
              </li>
            </Link>
            <ReactTooltip id="registerTip4" place="left" effect="float">Work Experience</ReactTooltip>
          </div>

          <div className="position-relative">
            <Link to="Hobby">
              <li id="sideBar" data-tip='' data-for="registerTip5">
              </li>
            </Link>
            <ReactTooltip id="registerTip5" place="left" effect="float">Hobby</ReactTooltip>
          </div>

          <div className="position-relative">
            <Link to="Languages">
              <li id="sideBar" data-tip='' data-for="registerTip6">
              </li>
            </Link>
            <ReactTooltip id="registerTip6" place="left" effect="float">Languages</ReactTooltip>
          </div>
        </ul>
      </div>

    );
  }
}

export default PagesSideBar;
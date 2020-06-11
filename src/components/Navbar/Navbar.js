import React, {Component} from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import {withRouter} from "react-router-dom";

class Navbar extends Component {
  state = {
    showNavigationModal: false
  };

  toggleNavigationMenu() {
    if (!this.state.showNavigationModal) {
      document.body.classList.add('nav-open');
      this.setState({showNavigationModal: true});
    } else {
      document.body.classList.remove('nav-open');
      this.setState({showNavigationModal: false});
    }
  }

  render() {
    return (
      <header className="head-main">
        <div className="navbar navbar-light bg-light box-shadow ">
          <div className="container d-flex justify-content-between nav-item">
            <Link to="/" className="navbar-brand ml-0 d-flex align-items-center">
              <strong>Delia Popescu</strong>
            </Link>
            <button className="navbar-toggler nav-button first-button" type="button"
                    onClick={() => this.toggleNavigationMenu()}>
              <span className="dark-blue-text">
                <i className="fas fa-bars fa-1x"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="fixed-top main-menu">
          <div className="flex-center p-5">
            <ul className="nav flex-column">
              <Link to="/">
                <li className="nav-item delay-1 " onClick={() => this.toggleNavigationMenu()}>
                  Home
                </li>
              </Link>
              <Link to="/About">
                <li className="nav-item delay-2" onClick={() => this.toggleNavigationMenu()}>
                  About
                </li>
              </Link>
              <Link to="/Studies">
                <li className="nav-item delay-2" onClick={() => this.toggleNavigationMenu()}>
                  Studies
                </li>
              </Link>
              <Link to="/WorkExperience">
                <li className="nav-item delay-2" onClick={() => this.toggleNavigationMenu()}>
                  Work Experience
                </li>
              </Link>
              <Link to="/Hobby">
                <li className="nav-item delay-4" onClick={() => this.toggleNavigationMenu()}>
                  Hobby
                </li>
              </Link>
              <Link to="/Languages">
                <li className="nav-item delay-5" onClick={() => this.toggleNavigationMenu()}>
                  Languages
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Navbar);



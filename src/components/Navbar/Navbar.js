import React, {Component} from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import {withRouter} from "react-router-dom";

class Navbar extends Component {
    state = {
      showNavigationModal: false,

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
  componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }



  render() {
    return (
      <header className="head-main">
        <div className="navbar navbar-light bg-light box-shadow ">
          <div className="container d-flex justify-content-between nav-item">
            <Link to="/" className="navbar-brand ml-0 d-flex align-items-center">
              <strong>Delia Popescu</strong>
            </Link>
            <div className="dropdown m-0 p-0">
              <button className="btn btn-primary  dropdown-toggle p-3" type="button" id="dropdownMenu1"
                      data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false" id="followButton">
                <i className="far fa-comments"></i>
              </button>
              <div id="dropdown-menu" className="dropdown-menu dropdown-primary ">
                {/*<a className="dropdown-item p-2" href="https://www.facebook.com/">*/}
                {/*  <i className="fab fa-facebook m-3"></i>*/}
                {/*</a>*/}
                {/*<a class="dropdown-item p-2" href="https://www.instagram.com/">*/}
                {/*  <i className="fab fa-instagram-square m-3"></i>*/}
                {/*</a>*/}
                <a class="dropdown-item p-2" href="https://www.linkedin.com/feed/">
                  <i className="fab fa-linkedin m-3"></i>
                </a>
                <a class="dropdown-item p-2" href="https://github.com/deliacpopescu">
                  <i className="fab fa-github m-3"></i>
                </a>
              </div>
            </div>
            <button className="navbar-toggler nav-button first-button" type="button"
                    onClick={() => this.toggleNavigationMenu()}>
              <span className="dark-blue-text">
                <i className="fas fa-bars fa-1x"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="fixed-top main-menu" onClick={() => this.toggleNavigationMenu()}>
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
              <Link to="/Skills">
                <li className="nav-item delay-2" onClick={() => this.toggleNavigationMenu()}>
                  Skills
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



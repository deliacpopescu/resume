import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MediaSideBar from "./components/MediaSideBar/MediaSideBar";
import Body from "./components/Body";
import 'bootstrap/dist/css/bootstrap.min.css';
import PagesSideBar from "./components/PagesSideBar/PagesSideBar";


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <div className="container-fluid d-inline-flex text-center">
          <MediaSideBar/>
          <Body/>
          <PagesSideBar/>
        </div>
      </Router>
    );
  };
}

export default App;
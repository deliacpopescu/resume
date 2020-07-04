import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Hobby from "./Hobby";
import Studies from "./Studies";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import Languages from "./Languages";
import Particles from "react-particles-js";

class Body extends Component {
  render() {
    return (
      <div id="main-container" className="container-fluid ">
        <Particles className="particles-js" params={{
          particles: {
            number: {
              value: 150
            },
            size: {
              value: 4
            },
            color: {
              "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
            },
            shape: {
              "type": "square",
              "stroke": {
                "width": 0,
                "color": "#b6b2b2"
              }
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: !0,
                mode: Particles.HoverMode.repulse
              }
            }
          },
        }}>
        </Particles>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/WorkExperience" component={WorkExperience}/>
          <Route path="/Studies" component={Studies}/>
          <Route path="/Studies" component={Skills}/>
          <Route path="/Hobby" component={Hobby}/>
          <Route path="/Languages" component={Languages}/>
        </Switch>
      </div>
    );
  }
}

export default Body;
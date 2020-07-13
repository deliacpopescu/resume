import React, {Component} from "react";
import "./Projects.css";

class Projects extends Component {

  render() {
    return (
      <div className="d-flex h-100">
        <div className=" container overlay-with-background align-self-center rounded">
            <h4 className="font-weight-bold font-italic mb-4">Projects</h4>
            <ul>
                <li>Hangman</li>
                <li>The Mover Game</li>
                <li>Meal's Recipe </li>
                <li>The Movie Website</li>
            </ul>
        </div>
      </div>
    )
  }
}

export default Projects;
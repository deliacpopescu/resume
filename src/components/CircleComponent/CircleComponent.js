import React, {Component} from "react";
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from "./ChangingProgressProvider";

class CircleComponent extends Component {


  render() {
    return (
      <ChangingProgressProvider values={[0, this.props.percentage]}>
        {percentage => (
          <CircularProgressbar

            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathTransition:
                percentage === 0 ? "none" : "stroke-dashoffset 5s ease 0s"
            })}
          />
        )}
      </ChangingProgressProvider>
    );
  }
}

export default CircleComponent;
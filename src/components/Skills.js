import React, {Component} from 'react';
import './Skills.css';
import CircleComponent from "./CircleComponent/CircleComponent";

class Skills extends Component {
  state = {
    percentage: {"HTML": 85, "CSS": 80, "JS": 60, "BOOTSTRAP": 60, "REACT": 60}
  };

  render() {
    return (
      <div className='d-flex h-100 '>
        <div id="container" className="container p-4 overlay-with-background align-self-center rounded">
          <h4 className="font-weight-bold font-italic m-4">Skills</h4>
          <div className="row justify-content-center">
            <div className="col-md-8 pt-5 pt-5 d-inline-flex">
              {
                Object.entries(this.state.percentage).map(([key, value]) => {
                  return (
                    <div id="Component">
                        <CircleComponent percentage={value}/>
                        <span id="key" className="font-weight-bold font-italic">{key}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

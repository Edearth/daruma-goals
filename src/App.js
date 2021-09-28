import React from "react";
import './App.css';
import { Daruma } from './Daruma.js';
import { DarumaCreationButton } from './DarumaCreationButton.js';
import testFace from './test-face.png';

if(process.env.NODE_ENV) {
  var browser = null;
} else {
  var browser = require("webextension-polyfill");
}

/*
crimson
darkseagreen
dodgerblue
cornsilk (instead of white?)
*/


class App extends React.Component {

  goals = [
    {title: "Create a goal now!"}
  ];

  constructor(props) {
    super(props);
    this.state={goals: this.goals};
    this.updateGoals = this.updateGoals.bind(this);
    browser?.storage.local.get('goals', (data) => {
      this.state = data;
    });
  }

  updateGoals(newGoal) {
    this.goals.unshift(newGoal);
    this.setState({goals: this.goals});
    browser?.storage.local.set(this.state, () => {
      console.log("State updated with new goal: "+newGoal);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DarumaCreationButton
              createDaruma={this.updateGoals} />
          <div className="row wrap-items daruma-display-container">
            { this.state.goals.map(daruma =>
              <div className="column daruma-display-item">
                <Daruma
                    fill="crimson"
                    className="dancing-daruma"
                    alt="The selected daruma goal"
                    leftEye={testFace}
                    width="200px"/>
                <p>{daruma.title}</p>
              </div>
              )
            }
          </div>
        </header>
      </div>
    );
  }
}

export default App;

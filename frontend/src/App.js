import { ReactComponent as Daruma} from './daruma.svg';
import React from "react";
import './App.css';
import { DarumaCreationButton } from './DarumaCreationButton.js';
import { Drawing } from './Drawing.js';

/*
crimson
darkseagreen
dodgerblue
cornsilk (instead of white?)
*/


class App extends React.Component {

  darumas = [
    {title: "Create a goal now!"}
  ];

  constructor(props) {
    super(props);
    this.state={darumas: this.darumas};
    this.updateDaruma = this.updateDaruma.bind(this);
  }

  updateDaruma(newDaruma) {
    this.darumas.unshift(newDaruma);
    this.setState({darumas: this.darumas});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Drawing />
          <DarumaCreationButton
              createDaruma={this.updateDaruma} />
          <div className="row wrap-items daruma-display-container">
            { this.state.darumas.map(daruma =>
              <div className="column daruma-display-item">
                <Daruma
                    fill="crimson"
                    className="dancing-daruma"
                    alt="The selected daruma goal"
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

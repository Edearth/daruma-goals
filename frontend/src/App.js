import { ReactComponent as Daruma} from './daruma.svg';
import React from "react";
import './App.css';
import { DarumaCreationButton } from './DarumaCreationButton.js';

/*
crimson
darkseagreen
dodgerblue
cornsilk (instead of white?)
*/


class App extends React.Component {

  darumas = [{title: "Create a goal now!"}];

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
        <DarumaCreationButton
            createDaruma={this.updateDaruma} />
        <header className="App-header">
          <div className="row current-daruma-display">
            { this.state.darumas.map(daruma =>
              <div className="column">
                <Daruma fill="crimson" className="dancing-daruma" alt="The selected daruma goal"/>
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

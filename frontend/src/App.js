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
    console.log(newDaruma);
    this.darumas[0].title = newDaruma.title;
    this.setState({darumas: this.darumas});
    console.log(this.state.darumas[0]);
  }

  render() {
    return (
      <div className="App">
        <DarumaCreationButton
            createDaruma={this.updateDaruma} />
        <header className="App-header">
          <Daruma fill="crimson" className="dancing-daruma" alt="The selected daruma goal"/>
          <p>{this.state.darumas[0].title}</p>
        </header>
      </div>
    );
  }
}

export default App;

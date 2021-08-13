import { ReactComponent as Daruma} from './daruma.svg';
import React from "react";
import './App.css';
import { DarumaCompletionButton } from './DarumaCompletionButton.js';

/*
crimson
darkseagreen
dodgerblue
cornsilk (instead of white?)
*/


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DarumaCompletionButton />
        <header className="App-header">
          <Daruma fill="crimson" className="dancing-daruma" alt="The selected daruma goal"/>
          <p>Ramen stall kitchen</p>
        </header>
      </div>
    );
  }
}

export default App;
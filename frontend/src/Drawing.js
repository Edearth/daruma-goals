import React from 'react';
import CanvasDraw from 'react-canvas-draw';

class Drawing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasRef : React.createRef()
    };
    this.undo = this.undo.bind(this);
    this.clear = this.clear.bind(this);
  }

  undo() {
    this.state.canvasRef.current.undo();
  }

  clear() {
    this.state.canvasRef.current.clear();
  }

  render() {
    return (
      <div style={{border:"2px solid red"}}>
        <CanvasDraw
            ref={this.state.canvasRef}
            style={{background:'transparent'}}
            brushColor='#DDDDDD'
            hideGrid="true" />
        <button onClick={this.undo}>Undo</button>
        <button onClick={this.clear}>Clear</button>
      </div>
    );

  }
}

export { Drawing };

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
    this.save = this.save.bind(this);
  }

  undo() {
    this.state.canvasRef.current.undo();
  }

  clear() {
    this.state.canvasRef.current.clear();
  }

  save() {
    let image_in_base64 = this.state.canvasRef.current.canvas.drawing.toDataURL('image/png');
    console.log("drawing:"+image_in_base64);
    //TODO add the network request later
  }

  render() {
    return (
      <div style={{border:"2px solid red"}}>
        <CanvasDraw
            ref={this.state.canvasRef}
            style={{background:'transparent'}}
            brushColor='#DDDDDD'
            hideGrid />
        <input type="button" onClick={this.undo} value="Undo" />
        <input type="button" onClick={this.clear} value="Clear" />
        <input type="button" onClick={this.save} value="Save" />
      </div>
    );

  }
}

export { Drawing };

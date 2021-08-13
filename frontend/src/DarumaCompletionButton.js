import React from "react";
import { DarumaCompletionDialog } from "./GoalCompletion.js"

class DarumaCompletionButton extends React.Component {

  constructor(props) {
    super(props);
    this.showDialog = this.showDialog.bind(this);
    this.state = { isDialogShown:false };
  }

  showDialog() {
    this.setState({ isDialogShown:true });
  }

  render() {
    return (
      <div style={{float:"right"}}>
        <button onClick={this.showDialog}>+</button>
        <DarumaCompletionDialog
            shown={this.state.isDialogShown} />
      </div>
    );
  }

}

export { DarumaCompletionButton };

import React from "react";
import { DarumaCompletionDialog } from "./GoalCompletion.js"

class DarumaCompletionButton extends React.Component {

  constructor(props) {
    super(props);
    this.showDialog = this.showDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
    this.state = { isDialogShown: false };
  }

  showDialog() {
    this.setState({ isDialogShown: true });
  }

  hideDialog() {
    this.setState({ isDialogShown: false })
  }

  render() {
    return (
      <div style={{float:"right"}}>
        <button onClick={this.showDialog}>+</button>
        <DarumaCompletionDialog
            shown={this.state.isDialogShown}
            onRequestClose={this.hideDialog} />
      </div>
    );
  }

}

export { DarumaCompletionButton };

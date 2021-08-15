import React from "react";
import { DarumaCreationDialog } from "./DarumaCreationDialog.js"

class DarumaCreationButton extends React.Component {

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
      <div className="float-right-in-row">
        <button onClick={this.showDialog}>Create new goal</button>
        <DarumaCreationDialog
            shown={this.state.isDialogShown}
            createDaruma={this.props.createDaruma}
            onRequestClose={this.hideDialog} />
      </div>
    );
  }

}

export { DarumaCreationButton };

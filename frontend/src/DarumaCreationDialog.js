import React from "react";
import Modal from "react-modal";
import './App.css';
import { ReactComponent as Daruma } from './daruma.svg';

    Modal.setAppElement("#root");
class DarumaCreationDialog extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    this.createGoal = this.createGoal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  createGoal() {
    let daruma = {
      title: this.state.title
    };
    console.log(daruma)
    this.props.createDaruma(daruma);
    this.props.onRequestClose();
  }

  render() {
    return (
      <Modal
          className="GoalCreationModal"
          isOpen={this.props.shown}>
        <div className="column dialog">
          <button
              style={{marginLeft:"auto"}}
              onClick={this.props.onRequestClose}>
            x
          </button>
          <Daruma width="400px" />
          <div className="row">
            <input
                style={{paddingRight:"auto"}}
                name="title"
                onChange={this.handleInputChange} />
            <button
                onClick={this.createGoal}>
              Confirm
            </button>
          </div>
        </div>
      </Modal>
    )
  }
}

export { DarumaCreationDialog };

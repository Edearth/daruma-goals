import React from "react";
import Modal from "react-modal";
import './App.css';
import { ReactComponent as Daruma } from './daruma.svg';
//Modal.setAppElement("#root");

function DarumaCompletionDialog(props) {
  return (
    <Modal
        className="GoalCompletionModal"
        isOpen={props.shown}>
      <div className="GoalCompletionDialog">
        <button style={{float:"right"}} onClick={props.onRequestClose}>x</button>
        <br />
        <Daruma width="400px" />
        <h1>Yo, this works!</h1>
      </div>
    </Modal>
  )
}

export { DarumaCompletionDialog };

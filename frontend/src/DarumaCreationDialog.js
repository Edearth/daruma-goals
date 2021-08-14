import React from "react";
import Modal from "react-modal";
import './App.css';
import { ReactComponent as Daruma } from './daruma.svg';

function DarumaCreationDialog(props) {
  return (
    <Modal
        className="GoalCreationModal"
        isOpen={props.shown}>
      <div className="GoalCreationDialog">
        <button style={{float:"right"}} onClick={props.onRequestClose}>x</button>
        <br />
        <Daruma width="400px" />
        <h1>Yo, this works!</h1>
      </div>
    </Modal>
  )
}

export { DarumaCreationDialog };

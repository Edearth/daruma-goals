import React from "react";
import Modal from "react-modal";

//Modal.setAppElement("#root");

function DarumaCompletionDialog(props) {
  return (
    <Modal isOpen={props.shown}>
      <h1>Yo, this works!</h1>
    </Modal>
  )
}

export { DarumaCompletionDialog };

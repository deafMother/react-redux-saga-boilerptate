import React from "react";
import ReactDOM from "react-dom";
import ModalBox from "./ModalBox";

function modal() {
  return ReactDOM.createPortal(<ModalBox />, document.querySelector("#modal"));
}

export default modal;
// add this toAapp js

import React from "react";
import { connect } from "react-redux";
import { hideModdal } from "../../action";

const modalBox = ({ modal, hideModdal }) => {
  if (modal.status) {
    return (
      <div className="modal-ctn show">
        <div className={`${!modal.error ? "modal-box" : "modal-box error"}`}>
          <div
            className="modal-close__btn"
            onClick={() => {
              hideModdal();
            }}
          >
            X
          </div>
          <h4>{modal.error ? "Error" : "Success"}</h4>
          <p>{modal.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-ctn hide">
      <div className={`${!modal.error ? "modal-box" : "modal-box error"}`}>
        <div className="modal-close__btn">X</div>
        <h4>{modal.error ? "Error" : "Success"}</h4>
        <p>{modal.message}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};

export default connect(mapStateToProps, { hideModdal })(modalBox);

// first move modal modal-box uptore display property of modal-ctn to none

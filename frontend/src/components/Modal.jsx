import React from "react";
import Reactmodal from "react-modal";
import { connect } from "react-redux";
import "../styles/Modal.css";
import Search from "./Searchsuggestion";
import { toggleModalstate } from "../redux/actions/Postactions";

Reactmodal.setAppElement("#root");
const Modal = ({ modalState, toggleModalstate }) => {
  const handleclickModal = () => {
    toggleModalstate();
  };
  return (
    <Reactmodal
      style={{
        overlay: { backgroundColor: "rgb(21, 32, 43,0.8)" },
        content: {
          top: "20%",
          left: "20%",
          right: "20%",
          bottom: "20%",
        },
      }}
      isOpen={modalState}
    >
      <h2 className="h2">Choose Book</h2>
      <Search />
      <button className="postButton" onClick={handleclickModal}>
        Add Book
      </button>
    </Reactmodal>
  );
};

const mapStatetoprops = (storeData) => {
  return {
    modalState: storeData.postState.modalState,
  };
};

export default connect(mapStatetoprops, { toggleModalstate })(Modal);

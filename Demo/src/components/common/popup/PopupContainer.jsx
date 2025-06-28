import React from 'react';
import Popup from "./Popup";
import {connect} from "react-redux";
import {toggleIsOpen} from "../../../redux/popupReducer";

const PopupContainer = (props) => {
   return <Popup {...props} />
}

let mapStateToProps = (state) => {
    return {
        isOpen: state.popup.isOpen,
        userName: state.popup.userName,
        userId: state.popup.userId,
        message: state.popup.message,
        popupType: state.popup.popupType,
    }
};

export default connect(mapStateToProps, {toggleIsOpen})(PopupContainer)
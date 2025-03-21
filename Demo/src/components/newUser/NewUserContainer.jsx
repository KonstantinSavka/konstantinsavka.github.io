import React from "react";
import {connect} from "react-redux";
import NewUser from "./NewUser";
import {addNewUser, updateNewUserNameText, updateNewUserNoteText, updateNewUserEmailText, updateNewUserPhoneNumberText} from "../../redux/newUserReducer";
import {toggleIsFetching} from "../../redux/newUserReducer";
import axios from "axios";
import {compose} from "redux";

const NewUserContainer = (props) => {
    const postUser = (name = props.newUserNameText, note = props.newUserNoteText, email = props.newUserEmailText, phoneNumber = props.newUserPhoneNumberText) => {
        props.toggleIsFetching(true);
        axios.post(`https://67693632cbf3d7cefd39fadc.mockapi.io/users`, {name, note, email, phoneNumber})
            .then((response)=>{
                props.toggleIsFetching(false);
                props.addNewUser()
            })
    }

    return <NewUser {...props} postUser={postUser} />
}

const mapDispatchToProps = (state) => {
    return {
        newUserNameText: state.newUser.newUserNameText,
        newUserNoteText: state.newUser.newUserNoteText,
        newUserEmailText: state.newUser.newUserEmailText,
        newUserPhoneNumberText: state.newUser.newUserPhoneNumberText,
        isFetching: state.newUser.isFetching
    }
}

export default compose(connect(mapDispatchToProps, {updateNewUserNameText, updateNewUserNoteText, updateNewUserEmailText, updateNewUserPhoneNumberText,
    toggleIsFetching, addNewUser}))(NewUserContainer)
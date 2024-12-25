import React from "react";
import {connect} from "react-redux";
import NewUser from "./NewUser";
import {addNewUser, updateNewUserNameText} from "../../redux/newUserReducer";
import {toggleIsFetching} from "../../redux/newUserReducer";
import axios from "axios";
import {compose} from "redux";

const NewUserContainer = (props) => {
    const postUser = (text = props.newUserNameText) => {
        props.toggleIsFetching(true);
        axios.post(`https://67693632cbf3d7cefd39fadc.mockapi.io/users`, {name: text})
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
        isFetching: state.newUser.isFetching
    }
}

export default compose(connect(mapDispatchToProps, {updateNewUserNameText,
    toggleIsFetching, addNewUser}))(NewUserContainer)
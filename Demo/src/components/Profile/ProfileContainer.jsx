import React, {useEffect, useMemo} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {deleteUser, setSelectedUser, setUserProfile, updateUserProfile} from "../../redux/profileReducer";
import customWithRouter from "../common/customWithRouter";
import {toggleIsFetching} from "../../redux/profileReducer";
import {compose} from "redux";
import {updateNewNameText} from "../../redux/profileReducer";

const ProfileContainer = (props) => {
    const updateUserProfile = (text = props.newNameText, id = props.profile.id) => {
        props.toggleIsFetching(true);
        axios.put(`https://67693632cbf3d7cefd39fadc.mockapi.io/users/${id}`, {name: text})
            .then((response)=>{
                props.toggleIsFetching(false);
                props.updateUserProfile()
            })
    }

    const deleteUser = (id = props.profile.id) => {
        props.toggleIsFetching(true);
        axios.delete(`https://67693632cbf3d7cefd39fadc.mockapi.io/users/${id}`)
            .then((response)=>{
                props.toggleIsFetching(false);
                props.deleteUser()
            })
    }

    useEffect(() => {
        if (!props.params.userId) props.params.userId = 1;
        axios.get(`https://67693632cbf3d7cefd39fadc.mockapi.io/users/` + props.params.userId).then(response => {
            props.setUserProfile(
                response.data
            );
        })
    }, []);

    return <Profile updateNewNameText={props.updateNewNameText}
                    updateUser={updateUserProfile}
                    deleteUser={deleteUser}
                    isDeleted={props.isDeleted}
                    newNameText={props.newNameText}
                    profile={props.profile} />

};

let mapStateToProps = (state) => {
    return {
        isDeleted: state.profilePage.isDeleted,
        profile: state.profilePage.userProfile,
        isFetching: state.profilePage.isFetching,
        newNameText: state.profilePage.newNameText,
        selectedUser: state.profilePage.selectedUser
    }
};

export default compose(connect(mapStateToProps, {setUserProfile,
        updateUserProfile,
        deleteUser,
        toggleIsFetching,
        setSelectedUser,
        updateNewNameText}),
customWithRouter)(ProfileContainer)
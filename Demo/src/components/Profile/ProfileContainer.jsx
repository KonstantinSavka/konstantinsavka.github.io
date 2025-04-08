import React, {useEffect, useMemo} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {deleteUser, setSelectedUser, setUserProfile, updateUserProfile} from "../../redux/profileReducer";
import customWithRouter from "../common/customWithRouter";
import {toggleIsFetching} from "../../redux/profileReducer";
import {compose} from "redux";
import {updateNewNameText, updateNewNoteText, updateNewEmailText, updateNewPhoneNumberText} from "../../redux/profileReducer";
import {toggleIsOpen} from "../../redux/popupReducer";

const ProfileContainer = (props) => {
    const updateUserProfile = (id = props.profile.id) => {
        props.toggleIsFetching(true);
        let updatedData = {name: props.newNameText, note: props.newNoteText, email: props.newEmailText, phoneNumber: props.newPhoneNumberText};
            for(let info in updatedData) {
                if(!Boolean(updatedData[info])) updatedData[info] = props.profile[info]
            }
        axios.put(`https://67693632cbf3d7cefd39fadc.mockapi.io/users/${id}`, updatedData)
            .then(()=>{
                axios.get(`https://67693632cbf3d7cefd39fadc.mockapi.io/users/${id}`).then(response => {
                    props.setUserProfile(
                        response.data
                    );
                    props.updateUserProfile()
                    props.toggleIsFetching(false);
                    props.toggleIsOpen(true)
                })
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

        return ()=>{
            props.toggleIsOpen(false);
        }
    }, []);

    return <Profile updateNewNameText={props.updateNewNameText}
                    updateNewNoteText={props.updateNewNoteText}
                    updateNewEmailText={props.updateNewEmailText}
                    updateNewPhoneNumberText={props.updateNewPhoneNumberText}
                    updateUser={updateUserProfile}
                    deleteUser={deleteUser}
                    isDeleted={props.isDeleted}
                    newNameText={props.newNameText}
                    newNoteText={props.newNoteText}
                    newEmailText={props.newEmailText}
                    newPhoneNumberText={props.newPhoneNumberText}
                    popup={props.popup}
                    toggleIsOpen={props.toggleIsOpen}
                    profile={props.profile} />

};

let mapStateToProps = (state) => {
    return {
        isDeleted: state.profilePage.isDeleted,
        profile: state.profilePage.userProfile,
        isFetching: state.profilePage.isFetching,
        newNameText: state.profilePage.newNameText,
        newNoteText: state.profilePage.newNoteText,
        newEmailText: state.profilePage.newEmailText,
        newPhoneNumberText: state.profilePage.newPhoneNumberText,
        popup: state.popup.isOpen
    }
};

export default compose(connect(mapStateToProps, {setUserProfile,
        updateUserProfile,
        deleteUser,
        toggleIsFetching,
        toggleIsOpen,
        updateNewNameText,
        updateNewNoteText,
        updateNewEmailText,
        updateNewPhoneNumberText}),
customWithRouter)(ProfileContainer)
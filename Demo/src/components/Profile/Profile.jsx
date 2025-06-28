import React from 'react';
import Preloader from "../common/preloader/Preloader";
import User from "../Users/User";
import PopupContainer from "../common/popup/PopupContainer";


const Profile = (props) => {
    let newProfileNameElement = React.useRef(0);
    let newProfileNoteElement = React.useRef(0);
    let newProfileEmailElement = React.useRef(0);
    let newProfilePhoneNumberElement = React.useRef(0);
    let onNameChange = function() {
        let text = newProfileNameElement.current.value;
        props.updateNewNameText(text)
    }
    let onNoteChange = function() {
        let text = newProfileNoteElement.current.value;
        props.updateNewNoteText(text)
    }
    let onEmailChange = function() {
        let text = newProfileEmailElement.current.value;
        props.updateNewEmailText(text)
    }
    let onPhoneNumberChange = function() {
        let text = newProfilePhoneNumberElement.current.value;
        props.updateNewPhoneNumberText(text)
    }
    const onUpdateUser = () => {
        props.updateUser()
    }

    const onDeleteUser = () => {
        props.setPopupType('DELETE')
        props.setUserName(props.profile.name)
        props.setUserId(props.profile.id)
        props.toggleIsOpen(true)
    }

    if(props.isDeleted) {
        return <PopupContainer />
    }

    if(!props.profile || props.isFetching) {
        return <Preloader />
    }

    return (
        <>
            {props.popup ?
                <PopupContainer deleteUser={(id)=>{props.deleteUser(id)}}  /> : null}
            <h4 className="font-bold pb-2 mb-5 border-b border-gray-200">PUT/DELETE Demo</h4>
            <div>
                <div className='flex items-start'>
                    <User profile={props.profile} editable={false}/>
                    <div className='flex flex-col w-3/5'>
                        <textarea placeholder='New name' className='p-2 resize-none rounded-lg mb-3' rows='1'
                                  onChange={onNameChange}
                                  ref={newProfileNameElement}
                                  value={props.newNameText}/>
                        <textarea placeholder='New note' className='p-2 resize-none rounded-lg mb-3' rows='1'
                                  onChange={onNoteChange}
                                  ref={newProfileNoteElement}
                                  value={props.newNoteText}/>
                        <textarea placeholder='New email' className='p-2 resize-none rounded-lg mb-3' rows='1'
                                  onChange={onEmailChange}
                                  ref={newProfileEmailElement}
                                  value={props.newEmailText}/>
                        <textarea placeholder='New phone number' className='p-2 resize-none rounded-lg mb-5' rows='1'
                                  onChange={onPhoneNumberChange}
                                  ref={newProfilePhoneNumberElement}
                                  value={props.newPhoneNumberText}/>
                        <button onClick={onUpdateUser}
                                className='inline-block px-2 py-2 bg-green-200 rounded-lg mb-3'>Update User
                        </button>
                        <button onClick={onDeleteUser}
                                className='inline-block px-2 py-2 bg-red-200 rounded-lg'>Delete
                            User
                        </button>
                    </div>
                </div>
                {/*<ProfileInfo profile={props.profile} editable='false'/>*/}
                {/*<MyPostsContainer/>*/}
            </div>
        </>
    )
}

export default Profile;

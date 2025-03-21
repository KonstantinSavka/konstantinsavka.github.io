import React from "react";
import Preloader from "../common/preloader/Preloader";

const NewUser = (props) => {
    let newUserNameElement = React.useRef(0);
    let newUserNoteElement = React.useRef(0);
    let newUserEmailElement = React.useRef(0);
    let newUserPhoneNumberElement = React.useRef(0);
    let onNameChange = function() {
        let text = newUserNameElement.current.value;
        props.updateNewUserNameText(text)
    }
    let onNoteChange = function() {
        let text = newUserNoteElement.current.value;
        props.updateNewUserNoteText(text)
    }
    let onEmailChange = function() {
        let text = newUserEmailElement.current.value;
        props.updateNewUserEmailText(text)
    }
    let onPhoneNumberChange = function() {
        let text = newUserPhoneNumberElement.current.value;
        props.updateNewUserPhoneNumberText(text)
    }
    const onAddUser = () => {
        props.postUser()
    }

    return (
        <>
            <h4 className="font-bold pb-2 mb-5 border-b border-gray-200">POST Demo</h4>
            {props.isFetching ? <Preloader/> : null}
            <div className='flex flex-col w-1/2'>
                <textarea placeholder='Enter new name' className='p-2 resize-none rounded-lg mb-3' rows='1' onChange={onNameChange} ref={newUserNameElement}
                          value={props.newUserNameText}/>
                <textarea placeholder='Enter new note' className='p-2 resize-none rounded-lg mb-3' rows='1' onChange={onNoteChange} ref={newUserNoteElement}
                          value={props.newUserNoteText}/>
                <textarea placeholder='Enter new email' className='p-2 resize-none rounded-lg mb-3' rows='1' onChange={onEmailChange} ref={newUserEmailElement}
                          value={props.newUserEmailText}/>
                <textarea placeholder='Enter new phone number' className='p-2 resize-none rounded-lg mb-5' rows='1' onChange={onPhoneNumberChange} ref={newUserPhoneNumberElement}
                          value={props.newUserPhoneNumberText}/>
                <button onClick={onAddUser} className='inline-block px-2 py-2 bg-green-200 rounded-lg'>Create User
                </button>
            </div>
        </>
    )
}

export default NewUser
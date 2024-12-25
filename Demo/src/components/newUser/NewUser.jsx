import React from "react";
import Preloader from "../common/preloader/Preloader";

const NewUser = (props) => {
    let newUserNameElement = React.useRef(0);
    let onNameChange = function() {
        let text = newUserNameElement.current.value;
        props.updateNewUserNameText(text)
    }
    const onAddUser = () => {
        props.postUser()
        console.log(props)
    }

    return (
        <>
            <h4 className="font-bold pb-2 mb-5 border-b border-gray-200">POST Demo</h4>
            {props.isFetching ? <Preloader/> : null}
            <div className='flex'>
                <textarea placeholder='Enter new name' className='p-2 resize-none rounded-lg' rows='1' onChange={onNameChange} ref={newUserNameElement}
                          value={props.newUserNameText}/>
                <button onClick={onAddUser} className='inline-block px-2 py-1 bg-green-200 rounded-lg ml-2'>Create User
                </button>
            </div>
        </>
    )
}

export default NewUser
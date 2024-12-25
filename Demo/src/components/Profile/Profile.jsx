import React from 'react';
import Preloader from "../common/preloader/Preloader";
import User from "../Users/User";


const Profile = (props) => {
    let newProfileNameElement = React.useRef(0);
    let onNameChange = function() {
        let text = newProfileNameElement.current.value;
        props.updateNewNameText(text)
    }
    const onAddUser = () => {
        console.log(props)
        props.updateUser()
    }

    const onDeleteUser = () => {
        props.deleteUser()
    }

    if(props.isDeleted) {
        return <div className='font-bold'>User Deleted</div>
    }

    if(!props.profile) {
        return <Preloader />
    }

    return (
        <>
            <h4 className="font-bold pb-2 mb-5 border-b border-gray-200">PUT/DELETE Demo</h4>
            <div>
                <div className='flex items-start'>
                    <User profile={props.profile} editable={false}/>
                    <div className='flex flex-col'>
                        <div className='flex mb-2'>
                        <textarea placeholder='New name' className='p-2 resize-none rounded-lg' rows='1'
                                  onChange={onNameChange}
                                  ref={newProfileNameElement}
                                  value={props.newNameText}/>
                            <button onClick={onAddUser}
                                    className='inline-block px-2 py-1 bg-green-200 rounded-lg ml-2'>Update User
                            </button>
                        </div>
                        <button onClick={onDeleteUser}
                                className='inline-block px-2 py-1 bg-red-200 rounded-lg'>Delete
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

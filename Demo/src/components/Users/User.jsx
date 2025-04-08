import React from "react";
import {NavLink} from "react-router-dom";
import PopupContainer from "../common/popup/PopupContainer";

const User = (props) => {
    const editable = props.editable;
    const deletable = props.deletable;

    const setDeleted = () => {
        props.setDeleted()
    }

    const onDeleteUser = (id) => {
        // props.deleteUser(id)
        props.toggleIsOpen(true)
    }

    console.log(`${props.profile.name}`, 'mounted')

    return (
        <>
            {/*{props.popup ? <PopupContainer deletePopup={true} deleteUser={()=>{props.deleteUser(props.profile.id)}} userName={props.profile.name} /> : null}*/}
            <div
                className='mb-5 bg-white shadow-md p-2 rounded-lg inline-block mr-4 w-60 flex flex-col justify-between'>

                <div className='mb-2'>
                    <img
                        // src={props.profile.avatar != null ? props.profile.avatar : 'https://demo.promo///sk/mails_archive_3/newLucky/user.png'}
                        src='https://demo.promo///sk/mails_archive_3/newLucky/user.png'
                        alt="" className='rounded-lg w-full object-cover'/>
                </div>

                <div className='mt-2'>
                    {
                        editable ?
                            <NavLink onClick={setDeleted} to={'/profile/' + props.profile.id} className='inline-block px-2 py-1 bg-amber-200 rounded-lg'>
                                <span>Edit</span>
                            </NavLink>
                            : ''
                    }
                    {
                        deletable ?
                            <button onClick={()=>{onDeleteUser(props.profile.id)}}
                                    className='inline-block px-2 py-1 bg-red-200 rounded-lg ml-2'>Delete
                                User
                            </button>
                            : ''
                    }
                    <div>
                        <div className='font-bold'>{props.profile.name}</div>
                    </div>
                    <div>
                        <div className='text-gray-500 text-sm'>{props.profile.note}</div>
                    </div>
                    <div>
                        <div className='text-gray-500 text-sm'>{props.profile.email}</div>
                    </div>
                    <div>
                        <div className='text-gray-500 text-sm'>{props.profile.phoneNumber}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User
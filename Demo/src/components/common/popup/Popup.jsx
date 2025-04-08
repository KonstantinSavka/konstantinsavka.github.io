import React from "react";

const Popup = (props) => {
    console.log(props)
    const deleteUser = () => {
        props?.deleteUser()
        props.toggleIsOpen(false)
    }

    const cancelAction = () => {
        props.toggleIsOpen(false)
    }

    return (() => {
        switch (true) {
            case props?.deletePopup: {
                return (
                    <div className='w-full h-full bg-white/30 backdrop-blur-lg absolute left-0 top-0 pointer-events-none'>
                        <div className='bg-white shadow-md p-2 rounded-lg inline-flex w-60 flex-col justify-between absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto'>
                            <div className='mb-5'>Are You sure want to delete user <span className='font-bold'>{props?.userName}</span> ?</div>
                            <button onClick={deleteUser}
                                    className='inline-block px-2 py-2 bg-green-200 rounded-lg mb-3'>Confirm
                            </button>
                            <button onClick={cancelAction}
                                    className='inline-block px-2 py-2 bg-red-200 rounded-lg'>Cancel
                            </button>
                        </div>
                    </div>
                )
            }
            case props?.infoPopup: {
                return (<div className='bg-white shadow-md p-2 rounded-lg inline-flex w-60 flex-col justify-between'>
                    <div className='mb-5'>{props?.message}</div>
                </div>)
            }
            default: {
                return (<div>Popup type not selected</div>)
            }
        }
    })();
}

export default Popup
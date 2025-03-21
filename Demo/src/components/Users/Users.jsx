import React from "react";
import User from "./User";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <h4 className="font-bold pb-2 mb-5 border-b border-gray-200">GET Demo</h4>
        <div className='mb-2'>
            {pages.map((p, i) => {
                return <span key={i}
                             className={props.currentPage === p ? 'text-lg text-red-700 px-1 font-bold' : 'text-md text-gray px-1 cursor-pointer'}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        <div className='flex flex-wrap'>
            {
                props.users.map(u => {
                    const deleted = props.setDeleted;
                    const deleteUser = props.deleteUser;
                    return <User key={u.id} profile={u} deleteUser={deleteUser} setDeleted={deleted} deletable={true} editable={true}/>
                })
            }
        </div>
    </div>

}

export default Users
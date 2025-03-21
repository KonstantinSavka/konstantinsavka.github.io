import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (<nav className='md:col-span-1 md:flex md:justify-end text-right'>
            <div className='text-sm mt-6 hidden md:block'>
                <NavLink to="/users" className={({ isActive }) => isActive ? 'text-gray-700 border-r-4 border-red-400 font-bold py-1 block' : "py-1 block border-r-4 border-transparent"}>
                    <span className='px-4 flex justify-end'>Users</span>
                </NavLink>
                <NavLink to="/newUser" className={({ isActive }) => isActive ? 'text-gray-700 border-r-4 border-red-400 font-bold py-1 block' : "py-1 block border-r-4 border-transparent"}>
                    <span className='px-4 flex justify-end'>Create user</span>
                </NavLink>
            </div>
    </nav>)
}

export default Nav;
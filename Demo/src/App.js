import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import NewUserContainer from "./components/newUser/NewUserContainer";

const App = (props) => {
    return (
            <div className='grid md:grid-cols-3 h-full'>
                <Nav/>
                <div className='px-16 py-6 bg-gray-100 md:col-span-2'>
                    <Routes>
                        <Route path='/profile/:userId?' element={<ProfileContainer />} />
                        <Route path='/users' element={<UsersContainer />} />
                        <Route path='/newUser' element={<NewUserContainer />} />
                    </Routes>
                </div>
            </div>

    );
}

export default App;

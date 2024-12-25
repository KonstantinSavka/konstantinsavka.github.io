import {applyMiddleware, combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import {thunk} from "redux-thunk";
import newUserReducer from "./newUserReducer";

let reducersBatch = combineReducers({
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    newUser: newUserReducer
})

let store = createStore(reducersBatch,  applyMiddleware(thunk));

window.store = store;

export default store;
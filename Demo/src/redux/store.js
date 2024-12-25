import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";


let store = {
    _state: {
        profilePage: {
            postData: [
                {message: 'Baracuda', likesCount: '50', key: 'p1'},
                {message: 'Supra', likesCount: '100', key: 'p2'},
                {message: 'Enve', likesCount: '1', key: 'p3'},
                {message: 'Goldy', likesCount: '34', key: 'p4'},
            ],
            newPostText: 'FLUX',
        },
        dialogsPage: {
            dialogs: [
                {name: 'Bla', ident: '1', key: 'd1'},
                {name: 'BlaBla', ident: '2', key: 'd2'},
                {name: 'Mr', ident: '3', key: 'd3'},
                {name: 'Freeman', ident: '4', key: 'd4'},
            ],
            messages: [
                {message: 'Lambda', key: 'm1'},
                {message: 'Omega', key: 'm2'},
                {message: 'Zeus', key: 'm3'},
                {message: 'Etan', key: 'm4'},
            ],
            newMessageBody: '',
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('state has changed')
    },

    getState(){
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0,
    //         key: Math.random(),
    //     };
    //
    //     this._state.profilePage.postData.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber();
    // },
    // updateNewPostText(postText) {
    //     this._state.profilePage.newPostText = `${postText}`;
    //     this._callSubscriber()
    // },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber();
    },
};

export default store;
window.store = store;
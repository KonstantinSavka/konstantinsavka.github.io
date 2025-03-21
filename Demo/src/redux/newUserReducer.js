const UPDATE_NEW_USER_NAME_TEXT = 'UPDATE_NEW_USER_NAME_TEXT',
    UPDATE_NEW_USER_NOTE_TEXT = 'UPDATE_NEW_USER_NOTE_TEXT',
    UPDATE_NEW_USER_EMAIL_TEXT = 'UPDATE_NEW_USER_EMAIL_TEXT',
    UPDATE_NEW_USER_PHONE_NUMBER_TEXT = 'UPDATE_NEW_USER_PHONE_NUMBER_TEXT',
    ADD_NEW_USER = 'ADD_NEW_USER',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    newUserNameText: '',
    newUserNoteText: '',
    newUserEmailText: '',
    newUserPhoneNumberText: '',
    isFetching: false,
};

const newUserReducer = function(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NEW_USER_NAME_TEXT:
            return {
                ...state,
                newUserNameText: action.newUserNameText
            }
        case UPDATE_NEW_USER_NOTE_TEXT:
            return {
                ...state,
                newUserNoteText: action.newUserNoteText
            }
        case UPDATE_NEW_USER_EMAIL_TEXT:
            return {
                ...state,
                newUserEmailText: action.newUserEmailText
            }
        case UPDATE_NEW_USER_PHONE_NUMBER_TEXT:
            return {
                ...state,
                newUserPhoneNumberText: action.newUserPhoneNumberText
            }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case ADD_NEW_USER: {
            return {
                ...state,
                newUserNameText: '',
                newUserNoteText: '',
                newUserEmailText: '',
                newUserPhoneNumberText: '',
            }
        }
        default:
            return state;
    }
}

export const updateNewUserNameText = function(newUserNameText) {
    return {
        type: UPDATE_NEW_USER_NAME_TEXT,
        newUserNameText
    }
}

export const updateNewUserNoteText = function(newUserNoteText) {
    return {
        type: UPDATE_NEW_USER_NOTE_TEXT,
        newUserNoteText
    }
}

export const updateNewUserEmailText = function(newUserEmailText) {
    return {
        type: UPDATE_NEW_USER_EMAIL_TEXT,
        newUserEmailText
    }
}

export const updateNewUserPhoneNumberText = function(newUserPhoneNumberText) {
    return {
        type: UPDATE_NEW_USER_PHONE_NUMBER_TEXT,
        newUserPhoneNumberText
    }
}

export const toggleIsFetching = function(isFetching) {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const addNewUser = function() {
    return {
        type: ADD_NEW_USER,
    }
}


export default newUserReducer
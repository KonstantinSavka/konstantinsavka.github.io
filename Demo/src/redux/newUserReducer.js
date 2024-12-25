const UPDATE_NEW_USER_NAME_TEXT = 'UPDATE_NEW_USER_NAME_TEXT',
    ADD_NEW_USER = 'ADD_NEW_USER',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    newUserNameText: '',
    isFetching: false,
};

const newUserReducer = function(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NEW_USER_NAME_TEXT:
            return {
                ...state,
                newUserNameText: action.newUserNameText
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
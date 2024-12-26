const
    DELETE_USER = 'DELETE_USER',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    UPDATE_NEW_NAME_TEXT = 'UPDATE_NEW_NAME_TEXT',
    UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE',
    SET_IS_DELETED = 'SET_IS_DELETED',
    SET_SELECTED_USER = 'SET_SELECTED_USER',
    SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    userProfile: null,
    isFetching: false,
    newNameText: '',
    isDeleted: false,
    selectedUser: null,
};

const profileReducer = function(state = initialState, action) {

    switch (action.type) {

        case UPDATE_NEW_NAME_TEXT:
            return {
                ...state,
                newNameText: action.newNameText
            }

        case SET_SELECTED_USER:
            return {
                ...state,
                selectedUser: action.selectedUser
            }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case SET_IS_DELETED: {
            return {
                ...state,
                isDeleted: false
            }
        }

        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }

        case DELETE_USER:
            return {
                ...state,
                userProfile: '',
                isDeleted: true
            }

        case UPDATE_USER_PROFILE: {
            return {
                ...state,
                userProfile: {...state.userProfile, name: state.newNameText},
                newNameText: '',
            }
        }

        default:
            return state;
    }
}

export const toggleIsFetching = function(isFetching) {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const setSelectedUser = function(selectedUser) {
    return {
        type: SET_SELECTED_USER,
        selectedUser
    }
}

export const deleteUser = function() {
    return {
        type: DELETE_USER,
    }
};

export const updateNewNameText = function(newNameText) {
    return {
        type: UPDATE_NEW_NAME_TEXT,
        newNameText
    }
}

export const updateUserProfile = function(newName) {
    return {
        type: UPDATE_USER_PROFILE,
        newName
    }
}

export const setUserProfile = function(userProfile) {
    return {
        type: SET_USER_PROFILE,
        userProfile
    }
}

export const setDeleted = function() {
    return {
        type: SET_IS_DELETED,
    }
}

export default profileReducer
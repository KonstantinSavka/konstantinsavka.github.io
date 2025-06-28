const
    TOGGLE_IS_OPEN = 'TOGGLE_IS_OPEN',
    SET_USER_ID = 'SET_USER_ID',
    SET_USER_NAME = 'SET_USER_NAME',
    SET_POPUP_TYPE = 'SET_POPUP_TYPE',
    SET_MESSAGE = 'SET_MESSAGE';

let initialState = {
    isOpen: false,
    userName: null,
    userId: null,
    message: null,
    popupType: {
        'DELETE': false,
        'NOTIFICATION': false
    },
};

const popupReducer = function(state = initialState, action) {

    switch (action.type) {

        case TOGGLE_IS_OPEN: {
            return {
                ...state,
                isOpen: action.isOpen
            }
        }

        case SET_USER_NAME: {
            return {
                ...state,
                userName: action.userName
            }
        }

        case SET_USER_ID: {
            return {
                ...state,
                userId: action.userId
            }
        }

        case SET_MESSAGE: {
            return {
                ...state,
                message: action.message
            }
        }

        case SET_POPUP_TYPE: {
            return {
                ...state,
                popupType: {[action.popupType]: true}
            }
        }

        default:
            return state;
    }
}

export const toggleIsOpen = function(isOpen) {
    return {
        type: TOGGLE_IS_OPEN,
        isOpen
    }
};

export const setUserName = function(userName) {
    return {
        type: SET_USER_NAME,
        userName
    }
};

export const setUserId = function(userId) {
    return {
        type: SET_USER_ID,
        userId
    }
};

export const setMessage = function(message) {
    return {
        type: SET_MESSAGE,
        message
    }
};

export const setPopupType = function(popupType) {
    return {
        type: SET_POPUP_TYPE,
        popupType
    }
};

export default popupReducer
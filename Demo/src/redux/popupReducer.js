const
    TOGGLE_IS_OPEN = 'TOGGLE_IS_OPEN';

let initialState = {
    isOpen: false,
};

const popupReducer = function(state = initialState, action) {

    switch (action.type) {

        case TOGGLE_IS_OPEN: {
            return {
                ...state,
                isOpen: action.isOpen
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

export default popupReducer
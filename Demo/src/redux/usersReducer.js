const
    SET_USERS = 'SET_USERS',
    SET_PAGE_SIZE = 'SET_PAGE_SIZE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    users: [],
    pageSize: null,
    totalUsersCount: 0,
    currentPage: 1,
    usersPerPage: 3,
    isFetching: true,
};

const usersReducer = function(state = initialState, action) {
    switch (action.type) {

        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case SET_PAGE_SIZE: {
            return {
                ...state,
                pageSize: action.pageSize
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
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

export const setUsers = function(users) {
    return {
        type: SET_USERS,
        users
    }
}

export const setPageSize = function(pageSize) {
    return {
        type: SET_PAGE_SIZE,
        pageSize
    }
}

export const setCurrentPage = function(pageNum) {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: pageNum
    }
}

export const setTotalUsersCount = function(total) {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: total
    }
}

export default usersReducer
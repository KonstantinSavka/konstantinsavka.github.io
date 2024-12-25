import usersReducer, {
    setCurrentPage,
    setPageSize,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching
} from "./usersReducer";


let state = {
    users: [],
    pageSize: null,
    totalUsersCount: 0,
    currentPage: 1,
    usersPerPage: 6,
    isFetching: true,
};

it('users array should be incremented', () => {
    let action = setUsers([{}]);
    let newState = usersReducer(state, action);

    expect(newState.users).toHaveLength(1)
})

it('page size should be truthy', () => {
    let action = setPageSize(2);
    let newState = usersReducer(state, action);

    expect(newState.pageSize).toBeTruthy()
})

it('users count should be greater than zero', () => {
    let action = setTotalUsersCount(2);
    let newState = usersReducer(state, action);

    expect(newState.totalUsersCount).toBeTruthy()
})

it('isfetching should be toggled', () => {
    let action = toggleIsFetching(true);
    let newState = usersReducer(state, action);

    expect(newState.isFetching).toBeTruthy()
})

it('current should update', () => {
    let action = setCurrentPage(2);
    let newState = usersReducer(state, action);

    expect(newState.currentPage).toBe(2)
})
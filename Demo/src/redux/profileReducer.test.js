import profileReducer, {
    deleteUser, setDeleted, setSelectedUser,
    setUserProfile,
    toggleIsFetching,
    updateNewNameText,
    updateUserProfile
} from "./profileReducer";

let state = {
    userProfile: null,
    isFetching: false,
    newNameText: '',
    isDeleted: false,
    selectedUser: null,
};

it('current user should be selected', ()=>{
    let action = setSelectedUser(1)
    let newState = profileReducer(state, action)

    expect(newState.selectedUser).toBe(1)
})

it('name input should be updated', () => {
    let action = updateNewNameText('test');
    let newState = profileReducer(state, action);

    expect(newState.newNameText).toBe('test')
})

it('fetch should be toggled', () => {
    let action = toggleIsFetching(true);
    let newState = profileReducer(state, action);

    expect(newState.isFetching).toBeTruthy()
})

it('user should be deleted', () => {
    let action = setDeleted(false);
    let newState = profileReducer(state, action);

    expect(newState.isDeleted).toBeFalsy()
})

it('user profile should be truthy', () => {
    let action = setUserProfile({});
    let newState = profileReducer(state, action);

    expect(newState.userProfile).toBeTruthy()
})

it('user profile should be falsy', () => {
    let action = deleteUser();
    let newState = profileReducer(state, action);

    expect(newState.userProfile).toBeFalsy()
    expect(newState.isDeleted).toBeTruthy()
})

it('user profile name should be updated', () => {
    let action = updateUserProfile('ololo');
    let testState = {
        userProfile: {
            a: 1,
            b: 2,
            name: 'test'
        },
        isFetching: false,
        newNameText: 'ololo',
        isDeleted: false,
    };
    let newState = profileReducer(testState, action);

    expect(newState.userProfile.name).toBe('ololo')
    expect(newState.newNameText).toBe('')
})
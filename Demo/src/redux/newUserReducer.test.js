import newUserReducer, {addNewUser, toggleIsFetching, updateNewUserNameText} from "./newUserReducer";

let state = {
    newUserNameText: '',
    isFetching: false,
};

it('name should update', ()=>{
    let action = updateNewUserNameText('Ted')
    let newState = newUserReducer(state, action)

    expect(newState.newUserNameText).toBe('Ted')
})

it('name should be empty', ()=>{
    let action = addNewUser()
    let newState = newUserReducer(state, action)

    expect(newState.newUserNameText).toBe('')
})

it('is fetching should be toggled', ()=>{
    let action = toggleIsFetching(true)
    let newState = newUserReducer(state, action)

    expect(newState.isFetching).toBeTruthy()
})
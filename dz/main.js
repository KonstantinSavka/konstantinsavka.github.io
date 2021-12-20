const mainContainerEl = document.getElementById('main');
const login = new LoginComponent(
    document.getElementById('login-template').innerText,
    mainContainerEl
);

login.onSuccess = onSuccessLogin;

function onSuccessLogin() {
    const userList = new UserListComponent(
        document.getElementById('user-list-template').innerText,
        document.getElementById('user-card-template').innerText,
        mainContainerEl
    );
};
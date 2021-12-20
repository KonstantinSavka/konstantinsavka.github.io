const api = (() => { 
const url = 'https://reqres.in/api';
class Api {
    constructor() {
        this._xhr = new XMLHttpRequest();
    }

    login(email, password, responseCb) {
        this._xhr.open('POST', `${url}/login`);
        this._xhr.setRequestHeader('content-type', 'application/json');

        this._xhr.onload = (e) => {
            const response = JSON.parse(e.currentTarget.responseText);
            responseCb && responseCb(response);
        };
        this._xhr.send(JSON.stringify({
            email,
            password
        }));
    }

    getUsers(page = 1, callback) {
    
        this._xhr.open('GET', `${url}/users?page=${page}`, true);
        this._xhr.onload = (e) => {
            const { data, total_pages } = JSON.parse(e.currentTarget.responseText);
            callback && callback(data, total_pages);
        }
        this._xhr.send();
    };

    // deleteUser(delId) {
    //     this._xhr.open('DELETE', `${url}/users/${delId}`);
    //     this._xhr.onload = (e) => {
    //         console.log(e.currentTarget);
    //     };
    //     this._xhr.send();
    // }
}

return new Api();
})();
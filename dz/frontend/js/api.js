const TR_8R = (() => {
    const url = 'https://reqres.in/api';
    class GApi {
        // constructor() {
        //     // this._xhr = new XMLHttpRequest();
        // }

        login(email, password) {
            return fetch(`${url}/login`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            }).then(response => response.json());
        }

        // loginPr(email, password) {
        //     const request = new Promise((resolve, reject) => {
        //         this._xhr.open('POST', `${url}/login`);
        //         this._xhr.setRequestHeader('content-type', 'application/json');
        //         this._xhr.onload = (e) => {
        //             const response = JSON.parse(e.currentTarget.responseText);
        //             if (response.token) {
        //                 resolve(response);
        //             } else {
        //                 reject(response);
        //             }
        //         };
        //         this._xhr.send(JSON.stringify({
        //             email,
        //             password
        //         }));
        //     });
        //     return request;
        // }

        // loginCb(email, password, responseCb) {
            //     this._xhr = new XMLHttpRequest();
        //         this._xhr.open('POST', `${url}/login`);
        //         this._xhr.setRequestHeader('content-type', 'application/json');

        //         this._xhr.onload = (e) => {
        //             const response = JSON.parse(e.currentTarget.responseText);
        //             responseCb && responseCb(response);
        //         };
        //         this._xhr.send(JSON.stringify({
        //             email,
        //             password
        //         }));
        //     }



        // getUsersCb(page = 1, callback) {

        //     this._xhr.open('GET', `${url}/users?page=${page}`, true);
        //     this._xhr.onload = (e) => {
        //         const { data, total_pages } = JSON.parse(e.currentTarget.responseText);
        //         callback && callback(data, total_pages);
        //     }
        //     this._xhr.send();
        // };


        getUsers(page = 1) {
            return fetch(`${url}/users?page=${page}`).then(response => response.json())
        };


        // getUsers(page = 1) {
        //     const request = new Promise((resolve, reject) => {
        //         this._xhr.open('GET', `${url}/users?page=${page}`, true);
        //         this._xhr.onload = (e) => {
        //             const { data, total_pages } = JSON.parse(e.currentTarget.responseText);
        //             if(data && total_pages) {
        //                 resolve([data, total_pages])
        //             } else {
        //                 reject(e.currentTarget.responseText)
        //             }
        //         }
        //         this._xhr.send();
        //     });
        //     return request;
        // };
    }

    return new GApi();
})();

export {TR_8R};
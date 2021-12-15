const url = 'https://reqres.in/api/users';
const template = document.getElementById('template').innerHTML;

const getUsers = function (page = 1, callback) {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `${url}?page=${page}`, true);

    xhr.send();

    xhr.onload = (e) => {
        const { data, total_pages } = JSON.parse(e.currentTarget.responseText);
        callback(data, total_pages);
    }
};

const createUser = function (name, job) {
    const userData = {
        'name' : name.value,
        'job' : job.value
    };
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${url}`, true);
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.send(JSON.stringify(userData));
    xhr.onload = (e) => {
        console.log(JSON.parse(e.currentTarget.responseText));
    }
}

const render = (template, bindings) => {
    let result = template;
    Object.keys(bindings).forEach(e => {
        result = result.replaceAll(`{{${e}}}`, bindings[e]);
    });
    return result;
}

const renderUserList = users => {
    const userListEl = document.getElementById('user-list');

    const templates = users
        .map(e => ({ ...e, name: `${e.first_name} ${e.last_name}` }))
        .map(e => render(template, e))
        .join('');

    userListEl.innerHTML = templates;
};

(() => {
    const btnBack = document.getElementById('btn-b');
    const btnForward = document.getElementById('btn-f');
    const pagesBlock = document.getElementById('pages');
    let globalPage = 1;
    let formName = document.getElementById('formName');
    let formJob = document.getElementById('formJob');
    const formSubmit = document.getElementById('formSubmit');
    const form = document.getElementById('form'); 

    const renderCall = page => {
        getUsers(page, (users, pages) => {
            renderUserList(users);
            pagesBlock.innerHTML = new Array(pages)
                .fill(null)
                .map((_, i) => `<button class="action-num" data-page="${i + 1}">${i + 1}</button>`)
                .join('');
        });
    };

    btnForward.addEventListener('click', e => {
        renderCall(++globalPage)
    });

    pagesBlock.addEventListener('click', e => {
        if (e.target.classList.contains('action-num')) {
            const { page } = e.target.dataset;
            globalPage = page;
            renderCall(page);
        }
    });

    btnBack.addEventListener('click', e => {
        renderCall(--globalPage)
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        createUser(formName, formJob);
    });

    renderCall(globalPage);
})();
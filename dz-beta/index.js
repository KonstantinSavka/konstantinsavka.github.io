(function () {

    // VARIABLES
    const form = document.querySelector('.form')
    const emailInput = document.querySelector('.email');
    const passwordInput = document.querySelector('.password');
    const loginBtn = document.querySelector('.submit');
    const allInputs = Array.from(document.getElementsByTagName('input'));
    const correctEmail = 'qwe@gw.com';
    const correctPassword = '123123';
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('entry-success');
    let empty;
    let checkout = [];

    // FUNCTIONS

    function checkValue(input) {
        return input.value !== '';
    }

    // LISTENERS

    form.addEventListener('input', function (evt) {
        const currentInput = evt.target;

        if (checkValue(currentInput)) {
            evt.target.classList.remove('error');
        } else if(!checkValue(currentInput)) {
            evt.target.classList.add('error');
        };

        empty = allInputs.filter(function(item){
            return item.value.length == 0;
        });

        if (empty == 0) {
            loginBtn.removeAttribute('disabled');
        } else if(empty.length > 0) {
            loginBtn.setAttribute('disabled', 'disabled');
        }

    })

    loginBtn.addEventListener('click', function(evt){
        evt.preventDefault();
        if(emailInput.value == correctEmail){
            checkout.push(true);
        } else {
            checkout.push(false);
        }
        if(passwordInput.value == correctPassword){
            checkout.push(true);
        } else {
            checkout.push(false);
            passwordInput.value = '';
        }

        if(checkout[0] == true && checkout[1] == true){
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            form.style.display = 'none';
        } else {
            errorMessage.style.display = 'block';
        }
    });

})();
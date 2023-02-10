const passwordField = document.querySelector('#password');
const passwordConfirmField = document.querySelector('#password-confirm');

// if the values of the password fields are not the same, set a custom attribute "isvalid" to false, and vice-versa
passwordField.addEventListener('keyup', () => {
    if (passwordField.value != passwordConfirmField.value) {
        passwordField.setAttribute('isvalid', 'false');
        passwordConfirmField.setAttribute('isvalid', 'false');
    }
    else if (passwordField.value == passwordConfirmField.value) {
        passwordField.setAttribute('isvalid', 'true');
        passwordConfirmField.setAttribute('isvalid', 'true');
    }
})

// sets the same to the password confirm field to couple them
passwordConfirmField.addEventListener('keyup', () => {
    if (passwordField.value != passwordConfirmField.value) {
        passwordField.setAttribute('isvalid', 'false');
        passwordConfirmField.setAttribute('isvalid', 'false');
    }
    else if (passwordField.value == passwordConfirmField.value) {
        passwordField.setAttribute('isvalid', 'true');
        passwordConfirmField.setAttribute('isvalid', 'true');
    }
})

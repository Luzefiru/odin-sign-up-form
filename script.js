const passwordField = document.querySelector('#password');
const passwordConfirmField = document.querySelector('#password-confirm');
const passwordWarningText = document.querySelector('.sign-up__content__form__fields__password-warning');

// if the values of the password fields are not the same, set a custom attribute "isvalid" to false, and vice-versa
passwordField.addEventListener('keyup', () => {
    if (passwordField.value != passwordConfirmField.value) {
        passwordField.setAttribute('isvalid', 'false');
        passwordConfirmField.setAttribute('isvalid', 'false');
        passwordWarningText.style.display = 'block';
    }
    else if (passwordField.value == passwordConfirmField.value) {
        passwordField.setAttribute('isvalid', 'true');
        passwordConfirmField.setAttribute('isvalid', 'true');
        passwordWarningText.style.display = 'none';
    }
})

// sets the same to the password confirm field to couple them
passwordConfirmField.addEventListener('keyup', () => {
    if (passwordField.value != passwordConfirmField.value) {
        passwordField.setAttribute('isvalid', 'false');
        passwordConfirmField.setAttribute('isvalid', 'false');
        passwordWarningText.style.display = 'block';
    }
    else if (passwordField.value == passwordConfirmField.value) {
        passwordField.setAttribute('isvalid', 'true');
        passwordConfirmField.setAttribute('isvalid', 'true');
        passwordWarningText.style.display = 'none';
    }
})

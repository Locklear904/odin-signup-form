let errorText = document.getElementById("error-text");
let userPassword = document.getElementById("password");
let userPasswordConfirm = document.getElementById("password-confirm");

function addPasswordErrors() {
    if (!userPassword.classList.contains("error")) {
        userPassword.classList.add("error");
    }
    if (!userPasswordConfirm.classList.contains("error")) {
        userPasswordConfirm.classList.add("error");
    }
}

function checkPassword() {
    if (userPassword.value == '' || userPasswordConfirm.value == '') {
        addPasswordErrors();
        errorText.textContent = "*Please enter a password and confirmation";
    }   else if (userPassword.value != userPasswordConfirm.value) {
        addPasswordErrors();
        errorText.textContent = "*Passwords do not match";
    }   else {
        errorText.textContent = "";
        userPassword.classList.remove("error");
        userPasswordConfirm.classList.remove("error");
    }
}

userPassword.addEventListener("keyup", checkPassword);
userPasswordConfirm.addEventListener("keyup", checkPassword);
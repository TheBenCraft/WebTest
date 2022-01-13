function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`)
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in lenght");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

// Login

var objPeople = [
    {
        username: "Bennet",
        password: "1234"
    }
]


function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for(i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username + " is logged in");
            window.location.href = "https://thebencraft.github.io/WebTest"
            return
        }
    }
    console.log("wrong username or password")
}

function saveData() {
    var username = document.getElementById("signupUsername").value
    var email = document.getElementById("signupEmail").value
    var password = document.getElementById("signupPassword").value
    var confirmpassword = document.getElementById("signupPasswordConfirm").value

    if( password !== confirmpassword ) {
        console.log('passswords differ')
        return
      }

    objPeople.push({
        username: username,
        password: password,
        email: email
    });
}


function testFuc() {
    
}


const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const userError = document.getElementById("userError");
const passError = document.getElementById("passError");


loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;

    userError.textContent = "";
    passError.textContent = "";

    if (usernameInput.value.trim() === "") {
        userError.textContent = "Username required";
        isValid = false;
    }

    if (passwordInput.value.trim() === "") {
        passError.textContent = "Password required";
        isValid = false;
    }

    if (isValid) {
        showAlert("Login successful!", "success");
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 2000);

    }
});

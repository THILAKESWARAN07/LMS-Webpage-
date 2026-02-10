
const showAlert = (message, type = "success") => {
    const container = document.getElementById("alertContainer");

    const alert = document.createElement("div");
    alert.classList.add("alert", `alert-${type}`);
    alert.textContent = message;

    container.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 5000);
};

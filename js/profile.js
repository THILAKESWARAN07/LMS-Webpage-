const editBtn = document.getElementById("editBtn");
const inputs = document.querySelectorAll("#profileForm input");

let editMode = false;

editBtn.addEventListener("click", () => {
    editMode = !editMode;

    inputs.forEach((input) => {
        input.disabled = !editMode;
    });

    if (editMode) {
        editBtn.textContent = "Save";
    } else {
        editBtn.textContent = "Edit Profile";
        showAlert("Profile updated successfully!", "success");

    }
});

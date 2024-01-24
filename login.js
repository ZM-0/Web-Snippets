const passwordInput = document.querySelector("#password");
const visibilityButton = document.querySelector(".visibility-button");
const visibilityIcon = document.querySelector(".visibility-button span");
let visible = false;

visibilityButton.addEventListener("click", () => {
    if (visible) {
        passwordInput.setAttribute("type", "password");
        visibilityIcon.innerHTML = "visibility";
    } else {
        passwordInput.setAttribute("type", "text");
        visibilityIcon.innerHTML = "visibility_off";
    }

    visible = !visible;
});

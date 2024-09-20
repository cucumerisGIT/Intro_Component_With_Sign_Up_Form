/* Variables */
// Form Elements
var form = document.getElementById("form");
var firstNameInput = document.getElementById("first-name");
var lastNameInput = document.getElementById("last-name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
/* Functions */
// Email verification
var isValidEmail = function (email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email && regex.test(email);
};
// Submit verification
var onSubmit = function (e) {
    e.preventDefault();
    reset();
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;
    if (!firstName)
        showError("first-name");
    if (!lastName)
        showError("last-name");
    if (!isValidEmail(email))
        showError("email");
    if (!password)
        showError("password");
};
// Show Error
var showError = function (inputName) {
    var el = document.getElementById(inputName);
    var icon = document.getElementById("".concat(inputName, "-error-icon"));
    var msg = document.getElementById("".concat(inputName, "-error-msg"));
    if (!el || !icon || !msg) {
        console.log("Did not find icon, msg or element for ".concat(inputName, " in showError"));
        return;
    }
    el.classList.add("form__input--error");
    icon.toggleAttribute("hidden");
    msg.toggleAttribute("hidden");
};
// Reset
var reset = function () {
    ["first-name", "last-name", "email", "password"].forEach(function (id) {
        var el = document.getElementById(id);
        var icon = document.getElementById("".concat(id, "-error-icon"));
        var msg = document.getElementById("".concat(id, "-error-msg"));
        if (!el || !icon || !msg) {
            console.log("Did not find icon, msg or element for ".concat(id, " in reset"));
            return;
        }
        el.classList.remove("form__input--error");
        icon.setAttribute("hidden", "true");
        msg.setAttribute("hidden", "true");
    });
};
form.addEventListener("submit", onSubmit);

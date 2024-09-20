/* Variables */

// Form Elements
const form = document.getElementById("form") as HTMLFormElement;
const firstNameInput = document.getElementById("first-name") as HTMLInputElement;
const lastNameInput = document.getElementById("last-name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;

/* Functions */

// Email verification
const isValidEmail = (email: string) => {
    const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email && regex.test(email);
}

// Submit verification
const onSubmit = (e: Event) => {
    e.preventDefault();
    reset();

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    if (!firstName) showError("first-name");
    if (!lastName) showError("last-name");
    if (!isValidEmail(email)) showError("email");
    if (!password) showError("password");
}

// Show Error
const showError = (inputName: string) => {
    const el = document.getElementById(inputName) as HTMLInputElement;
    const icon = document.getElementById(`${inputName}-error-icon`) as HTMLImageElement;
    const msg = document.getElementById(`${inputName}-error-msg`) as HTMLParagraphElement;

    if (!el || !icon || !msg) {
        console.log(`Did not find icon, msg or element for ${inputName} in showError`);
        return;
    }

    el.classList.add("form__input--error");
    icon.toggleAttribute("hidden");
    msg.toggleAttribute("hidden");
}

// Reset
const reset = () => {
    ["first-name", "last-name", "email", "password"].forEach(id => {
        const el = document.getElementById(id) as HTMLInputElement;
        const icon = document.getElementById(`${id}-error-icon`) as HTMLImageElement;
        const msg = document.getElementById(`${id}-error-msg`) as HTMLParagraphElement;

        if (!el || !icon || !msg) {
            console.log(`Did not find icon, msg or element for ${id} in reset`);
            return;
        }

        el.classList.remove("form__input--error");
        icon.setAttribute("hidden", "true");
        msg.setAttribute("hidden", "true");
    });
}

form.addEventListener("submit", onSubmit);
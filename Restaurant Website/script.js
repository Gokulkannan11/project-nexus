// Modal Handling
const loginModal = document.getElementById("login-modal");
const signupModal = document.getElementById("signup-modal");
const loginLink = document.getElementById("login-link");
const signupLink = document.getElementById("signup-link");
const closeButtons = document.querySelectorAll(".close-button");

loginLink.addEventListener("click", () => {
    loginModal.style.display = "block";
});

signupLink.addEventListener("click", () => {
    signupModal.style.display = "block";
});

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        loginModal.style.display = "none";
        signupModal.style.display = "none";
    });
});

window.addEventListener("click", (event) => {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    } else if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
});

const menuButton = document.querySelector("#menu-btn");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

/* Current Year */
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

/* Last Modified */
document.querySelector("#lastModified").textContent =
    document.lastModified;

/* Dark Mode */
const darkToggle = document.querySelector(".dark-toggle");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
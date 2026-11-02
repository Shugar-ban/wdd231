// current year

document.querySelector("#year").textContent =
new Date().getFullYear();

// last modified date

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

// hamburger menu

const menuButton =
document.querySelector("#menuBtn");

const navigation =
document.querySelector("#navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

});

// dark mode

const darkButton =
document.querySelector("#darkMode");

darkButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});
import { places } from "./places.mjs";

/* ==========================
   DISCOVER CARDS
========================== */

const discoverGrid = document.querySelector("#discover-grid");

places.forEach((place, index) => {

    const card = document.createElement("article");

    card.classList.add("card");
    card.classList.add(`area${index + 1}`);

    card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
            <img
                src="${place.image}"
                alt="${place.name}"
                loading="lazy"
                width="300"
                height="200">
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button>Learn More</button>
    `;

    discoverGrid.appendChild(card);
});

/* ==========================
   VISITOR MESSAGE
========================== */

const visitMessage = document.querySelector("#visit-message");

const now = Date.now();

const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {

    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const millisecondsBetweenVisits =
        now - Number(lastVisit);

    const daysBetweenVisits =
        Math.floor(
            millisecondsBetweenVisits / 86400000
        );

    if (daysBetweenVisits < 1) {

        visitMessage.textContent =
            "Back so soon! Awesome!";

    } else if (daysBetweenVisits === 1) {

        visitMessage.textContent =
            "You last visited 1 day ago.";

    } else {

        visitMessage.textContent =
            `You last visited ${daysBetweenVisits} days ago.`;

    }
}

localStorage.setItem("lastVisit", now);

/* ==========================
   LAST MODIFIED
========================== */

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

/* ==========================
   MOBILE MENU
========================== */

const menuButton = document.querySelector("#menu-btn");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

    });

}
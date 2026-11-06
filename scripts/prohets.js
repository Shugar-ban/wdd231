const url = "./latter-day-prophets.json";

const cards = document.querySelector("#cards");

async function getProphetData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        displayProphets(data.prophets);

    } catch (error) {
        console.error("Error loading JSON:", error);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");

        const fullName = document.createElement("h2");
        const birthDate = document.createElement("p");
        const birthPlace = document.createElement("p");
        const portrait = document.createElement("img");

        fullName.textContent =
            `${prophet.name} ${prophet.lastname}`;

        birthDate.textContent =
            `Date of Birth: ${prophet.birthdate}`;

        birthPlace.textContent =
            `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute("src", prophet.imageurl);

        portrait.setAttribute(
            "alt",
            `Portrait of ${prophet.name} ${prophet.lastname}`
        );

        portrait.setAttribute("loading", "lazy");

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};

getProphetData();
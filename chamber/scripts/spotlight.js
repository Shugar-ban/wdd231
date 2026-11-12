const spotlightContainer =
    document.querySelector("#spotlight-container");

async function getSpotlights() {

    try {

        const response =
            await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Member data unavailable");
        }

        const data =
            await response.json();

        const qualifiedMembers =
            data.members.filter(member =>
                member.membership === "Gold" ||
                member.membership === "Silver"
            );

        const shuffled =
            qualifiedMembers.sort(() =>
                0.5 - Math.random()
            );

        const selectedMembers =
            shuffled.slice(0, 3);

        displaySpotlights(selectedMembers);

    } catch (error) {

        console.error(error);
    }
}

function displaySpotlights(members) {

    spotlightContainer.innerHTML = "";

    members.forEach(member => {

        const card =
            document.createElement("section");

        card.classList.add("spotlight-card");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img
                src="${member.image}"
                alt="${member.name} logo"
                loading="lazy">

            <p>${member.phone}</p>

            <p>${member.address}</p>

            <a href="${member.website}"
               target="_blank">
               Visit Website
            </a>

            <p>
                <strong>
                    ${member.membership} Member
                </strong>
            </p>
        `;

        spotlightContainer.appendChild(card);

    });
}

getSpotlights();
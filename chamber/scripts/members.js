// ===============================
// Hamburger Menu
// ===============================

const menuButton = document.querySelector("#menu-btn");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

// ===============================
// Footer Information
// ===============================

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;

// ===============================
// Directory Display
// ===============================

const directory = document.querySelector(".directory");

const url = "data/members.json";

async function getMembers() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Could not fetch member data");
        }

        const data = await response.json();

        displayMembers(data.members);

    } catch (error) {
        console.error("Error:", error);
    }
}

function displayMembers(members) {

    directory.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("section");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.image}" 
                 alt="${member.name} Logo"
                 loading="lazy">

            <h3>${member.name}</h3>

            <p><strong>Address:</strong> ${member.address}</p>

            <p><strong>Phone:</strong> ${member.phone}</p>

            <p>
                <strong>Website:</strong>
                <a href="${member.website}"
                   target="_blank">
                   Visit Site
                </a>
            </p>

            <p><strong>Membership:</strong>
               ${getMembershipLevel(member.membership)}
            </p>
        `;

        directory.appendChild(card);
    });
}

// ===============================
// Membership Levels
// ===============================

function getMembershipLevel(level) {

    if (level === 3) {
        return "Gold Member";
    }

    if (level === 2) {
        return "Silver Member";
    }

    return "Member";
}

// Load member data
getMembers();

// ===============================
// Grid / List Toggle
// ===============================

const gridButton = document.querySelector("#gridBtn");
const listButton = document.querySelector("#listBtn");

gridButton.addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");
});

listButton.addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
});
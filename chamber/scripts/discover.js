import { places } from "../data/places.mjs";

const cardsContainer = document.querySelector("#places");

places.forEach(place => {
  const card = document.createElement("section");

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;

  cardsContainer.appendChild(card);

});
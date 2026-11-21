import { getMovies }
    from "./movies.js";

import { showModal }
    from "./modal.js";

import { saveFavorite }
    from "./storage.js";

const container =
    document.querySelector(
        "#movieContainer"
    );

async function displayMovies() {

    const movies =
        await getMovies();

    movies.forEach(movie => {

        const card =
            document.createElement("section");

        card.classList.add(
            "movie-card"
        );

        card.innerHTML = `
        <img
        src="${movie.image}"
        alt="${movie.title}"
        loading="lazy">

        <h3>${movie.title}</h3>

        <p>
        <strong>Year:</strong>
        ${movie.year}
        </p>

        <p>
        <strong>Genre:</strong>
        ${movie.genre}
        </p>

        <p>
        <strong>Rating:</strong>
        ${movie.rating}
        </p>

        <p>
        <strong>Language:</strong>
        ${movie.language}
        </p>

        <button
        class="detailsBtn">
        Details
        </button>

        <button
        class="favoriteBtn">
        Favorite
        </button>
        `;

        container.appendChild(
            card
        );

        card
            .querySelector(
                ".detailsBtn"
            )
            .addEventListener(
                "click",
                () => showModal(movie)
            );

        card
            .querySelector(
                ".favoriteBtn"
            )
            .addEventListener(
                "click",
                () => saveFavorite(movie)
            );

    });

}

displayMovies();

const menuBtn =
    document.querySelector(
        "#menuBtn"
    );

const navMenu =
    document.querySelector(
        "#navMenu"
    );

if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "open"
            );

        });

}

const closeModal =
    document.querySelector(
        "#closeModal"
    );

if (closeModal) {

    closeModal.addEventListener(
        "click",
        () => {

            document
                .querySelector(
                    "#movieModal"
                )
                .close();

        });

}
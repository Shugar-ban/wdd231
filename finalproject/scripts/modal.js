export function showModal(movie) {

    const modal =
        document.querySelector("#movieModal");

    const content =
        document.querySelector("#modalContent");

    content.innerHTML = `
        <h2>${movie.title}</h2>

        <img
        src="${movie.image}"
        alt="${movie.title}">

        <p>${movie.description}</p>

        <p><strong>Year:</strong>
        ${movie.year}</p>

        <p><strong>Genre:</strong>
        ${movie.genre}</p>

        <p><strong>Rating:</strong>
        ${movie.rating}</p>
    `;

    modal.showModal();
}
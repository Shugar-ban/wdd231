export function saveFavorite(movie) {

    let favorites =
        JSON.parse(
            localStorage.getItem(
                "favorites"
            )
        ) || [];

    const exists =
        favorites.some(
            item => item.id === movie.id
        );

    if (!exists) {

        favorites.push(movie);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        alert(
            `${movie.title} saved`
        );
    }
}
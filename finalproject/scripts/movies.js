export async function getMovies() {

    try {

        const response =
            await fetch("./scripts/movies.json");

        if (!response.ok) {

            throw new Error(
                "Movie data not found."
            );
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        return [];
    }
}
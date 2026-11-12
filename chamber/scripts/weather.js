const apiKey = "6f4d390952bb6762a48e7fa36b332a48";

const lat = 7.6292;
const lon = 4.1872;

const currentWeatherURL =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getCurrentWeather() {

    try {

        const response = await fetch(currentWeatherURL);

        if (!response.ok) {
            throw new Error("Weather data unavailable");
        }

        const data = await response.json();

        document.querySelector("#temperature").textContent =
            Math.round(data.main.temp);

        document.querySelector("#description").textContent =
            data.weather[0].description;

    } catch (error) {

        console.error(error);

        document.querySelector("#temperature").textContent =
            "N/A";

        document.querySelector("#description").textContent =
            "Unable to load weather data";
    }

}

async function getForecast() {

    try {

        const response = await fetch(forecastURL);

        if (!response.ok) {
            throw new Error("Forecast unavailable");
        }

        const data = await response.json();

        const forecastContainer =
            document.querySelector("#forecast");

        forecastContainer.innerHTML = "";

        const dailyForecasts =
            data.list.filter(item =>
                item.dt_txt.includes("12:00:00")
            ).slice(0, 3);

        dailyForecasts.forEach(day => {

            const card =
                document.createElement("div");

            card.classList.add("forecast-day");

            const date =
                new Date(day.dt_txt);

            card.innerHTML = `
                <strong>
                    ${date.toLocaleDateString(
                        "en-US",
                        { weekday: "short" }
                    )}
                </strong>
                <p>${Math.round(day.main.temp)}°C</p>
            `;

            forecastContainer.appendChild(card);

        });

    } catch (error) {

        console.error(error);
    }

}

getCurrentWeather();
getForecast();
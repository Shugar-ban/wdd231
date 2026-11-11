// SELECT HTML ELEMENTS IN THE DOCUMENT

const myTown = document.querySelector("h2");
const myDescription = document.querySelector("#description");
const myTemperature = document.querySelector("#current-temp");
const myGraphic = document.querySelector("#weather-icon");


// CREATE REQUIRED VARIABLES FOR THE URL

const myKey = "6f4d390952bb6762a48e7fa36b332a48";
const myLat = "49.75";
const myLong = "6.64";


// CONSTRUCT A FULL PATH USING TEMPLATE LITERALS

const myURL =
`https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;


// TRY TO GRAB THE CURRENT WEATHER DATA

async function apiFetch() {
    try {

        const response = await fetch(myURL);

        if (response.ok) {

            const data = await response.json();

            console.log(data); // testing only

            displayResults(data);

        } else {

            throw Error(await response.text());

        }

    } catch (error) {

        console.log(error);

    }
}


// DISPLAY WEATHER DATA

function displayResults(data) {

    myTown.textContent = "Trier, Germany";

    myTemperature.innerHTML = `${data.main.temp}&deg;F`;

    const iconSrc =
        `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    const desc = data.weather[0].description;

    myGraphic.setAttribute("src", iconSrc);
    myGraphic.setAttribute("alt", desc);

    myDescription.textContent = desc;
}


// CALL THE FUNCTION

apiFetch();
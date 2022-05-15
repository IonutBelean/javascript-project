const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const arad = document.querySelector(".dropdown-menu .arad");
const sibiu = document.querySelector(".dropdown-menu .sibiu");
const iasi = document.querySelector(".dropdown-menu .iasi");
const clujNapoca = document.querySelector(".dropdown-menu .cluj-napoca");
const constanta = document.querySelector(".dropdown-menu .constanta");
const craiova = document.querySelector(".dropdown-menu .craiova");
const brasov = document.querySelector(".dropdown-menu .brasov");



const updateCurrentCityRomania = (city) => {
    const currentCityElement = document.querySelector(".current-city");
    currentCityElement.innerHTML = `${city}.`;
}


const updateWeatherRomania = (city) => {
    updateCurrentCityRomania(city);
    displayCUrrentWeather(city);
};

bucharest.addEventListener("click", () => {
    updateWeatherRomania("București");
});

timisoara.addEventListener("click", () => {
    updateWeatherRomania("Timisoara");
});

oradea.addEventListener("click", () => {
    updateWeatherRomania("Oradea");
});

arad.addEventListener("click", () => {
    updateWeatherRomania("Arad");
});

sibiu.addEventListener("click", () => {
    updateWeatherRomania("Sibiu");
});

iasi.addEventListener("click", () => {
    updateWeatherRomania("Iași");
});

clujNapoca.addEventListener("click", () => {
    updateWeatherRomania("Cluj-Napoca");
});

constanta.addEventListener("click", () => {
    updateWeatherRomania("Constanța");
});

craiova.addEventListener("click", () => {
    updateWeatherRomania("Craiova");
});

brasov.addEventListener("click", () => {
    updateWeatherRomania("Brașov");
});


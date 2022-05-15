const london = document.querySelector(".dropdown-menu .london");
const liverpool = document.querySelector(".dropdown-menu .liverpool");
const manchester = document.querySelector(".dropdown-menu .manchester");
const bath = document.querySelector(".dropdown-menu .bath");
const norwich = document.querySelector(".dropdown-menu .norwich");
const cambridge = document.querySelector(".dropdown-menu .cambridge");
const bristol = document.querySelector(".dropdown-menu .bristol");
const brighton = document.querySelector(".dropdown-menu .brighton");
const portsmouth = document.querySelector(".dropdown-menu .portsmouth");
const bournemouth = document.querySelector(".dropdown-menu .bournemouth");



const updateCurrentCityEngland = (city) => {
    const currentCityElement = document.querySelector(".current-city");
    currentCityElement.innerHTML = `${city}.`;
}


const updateWeatherEngland = (city) => {
    updateCurrentCityEngland(city);
    displayCUrrentWeather(city);
};

london.addEventListener("click", () => {
    updateWeatherFrance("London");
});

liverpool.addEventListener("click", () => {
    updateWeatherFrance("Liverpool");
});

manchester.addEventListener("click", () => {
    updateWeatherFrance("Manchester");
});

bath.addEventListener("click", () => {
    updateWeatherFrance("Bath");
});

norwich.addEventListener("click", () => {
    updateWeatherFrance("Norwich");
});

cambridge.addEventListener("click", () => {
    updateWeatherFrance("Cambridge");
});

bristol.addEventListener("click", () => {
    updateWeatherFrance("Bristol");
});

brighton.addEventListener("click", () => {
    updateWeatherFrance("Brighton");
});

portsmouth.addEventListener("click", () => {
    updateWeatherFrance("Portsmouth");
});

bournemouth.addEventListener("click", () => {
    updateWeatherFrance("Bournemouth");
});


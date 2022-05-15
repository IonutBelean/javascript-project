const barcelona = document.querySelector(".dropdown-menu .barcelona");
const madrid = document.querySelector(".dropdown-menu .madrid");
const valencia = document.querySelector(".dropdown-menu .valencia");
const sevilia = document.querySelector(".dropdown-menu .sevilia");
const zaragoza = document.querySelector(".dropdown-menu .zaragoza");
const malaga = document.querySelector(".dropdown-menu .malaga");
const murcia = document.querySelector(".dropdown-menu .murcia");
const pamplona = document.querySelector(".dropdown-menu .pamplona");
const bilbao = document.querySelector(".dropdown-menu .bilbao");
const granada = document.querySelector(".dropdown-menu .granada");



const updateCurrentCitySpain = (city) => {
    const currentCityElement = document.querySelector(".current-city");
    currentCityElement.innerHTML = `${city}.`;
}


const updateWeatherSpain = (city) => {
    updateCurrentCitySpain(city);
    displayCUrrentWeather(city);
};

barcelona.addEventListener("click", () => {
    updateWeatherSpain("Barcelona");
});

madrid.addEventListener("click", () => {
    updateWeatherSpain("Madrid");
});

valencia.addEventListener("click", () => {
    updateWeatherSpain("Valencia");
});

sevilia.addEventListener("click", () => {
    updateWeatherSpain("Sevilia");
});

zaragoza.addEventListener("click", () => {
    updateWeatherSpain("Zaragoza");
});

malaga.addEventListener("click", () => {
    updateWeatherSpain("Málaga");
});

murcia.addEventListener("click", () => {
    updateWeatherSpain("Murcia");
});

pamplona.addEventListener("click", () => {
    updateWeatherSpain("Pamplona");
});

bilbao.addEventListener("click", () => {
    updateWeatherSpain("Bilbao");
});

granada.addEventListener("click", () => {
    updateWeatherSpain("Granada");
});


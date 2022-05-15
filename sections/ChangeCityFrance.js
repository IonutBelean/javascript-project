const paris = document.querySelector(".dropdown-menu .paris");
const nice = document.querySelector(".dropdown-menu .nice");
const lyon = document.querySelector(".dropdown-menu .lyon");
const bordeaux = document.querySelector(".dropdown-menu .bordeaux");
const marseilles = document.querySelector(".dropdown-menu .marseilles");
const strasbourg = document.querySelector(".dropdown-menu .strasbourg");
const lille = document.querySelector(".dropdown-menu .lille");
const rouen = document.querySelector(".dropdown-menu .rouen");
const amiens = document.querySelector(".dropdown-menu .amiens");
const toulouse = document.querySelector(".dropdown-menu .toulouse");



const updateCurrentCityFrance = (city) => {
    const currentCityElement = document.querySelector(".current-city");
    currentCityElement.innerHTML = `${city}.`;
}


const updateWeatherFrance = (city) => {
    updateCurrentCityFrance(city);
    displayCUrrentWeather(city);
};

paris.addEventListener("click", () => {
    updateWeatherFrance("Paris");
});

nice.addEventListener("click", () => {
    updateWeatherFrance("Nice");
});

lyon.addEventListener("click", () => {
    updateWeatherFrance("Lyon");
});

bordeaux.addEventListener("click", () => {
    updateWeatherFrance("Bordeaux");
});

marseilles.addEventListener("click", () => {
    updateWeatherFrance("Marseilles");
});

strasbourg.addEventListener("click", () => {
    updateWeatherFrance("Strasbourg");
});

lille.addEventListener("click", () => {
    updateWeatherFrance("Lille");
});

rouen.addEventListener("click", () => {
    updateWeatherFrance("Rouen");
});

amiens.addEventListener("click", () => {
    updateWeatherFrance("Amiens");
});

toulouse.addEventListener("click", () => {
    updateWeatherFrance("Toulouse");
});


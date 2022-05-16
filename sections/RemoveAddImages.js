const currentCountry = document.querySelector(".current-country");
const romaniaCountry = document.querySelector(".button-romania");
const spainCountry = document.querySelector(".button-spain");
const franceCountry = document.querySelector(".button-france");
const englandCountry = document.querySelector(".button-england");

const divImages = document.querySelector(".all-images")

const rompic = document.querySelectorAll(".rompic");
const spapic = document.querySelectorAll(".spapic");

const romaniaImages = document.querySelector(".romania-images");
const spainImages = document.querySelector(".spain-images");


romaniaCountry.addEventListener("click", () => {
    currentCountry.innerHTML = "Romania.";
    // spainImages.remove(spapic)
    // divImages.append(romaniaImages);
});

spainCountry.addEventListener("click", () => {
    currentCountry.innerHTML = "Spania.";
    // romaniaImages.remove(rompic);
    // divImages.append(spainImages);
});

franceCountry.addEventListener("click", () => {
    currentCountry.innerHTML = "Franța.";
});

englandCountry.addEventListener("click", () => {
    currentCountry.innerHTML = "Anglia.";
});
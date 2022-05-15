const scrollButton = document.querySelector(".scroll-to-top")

document.addEventListener("scroll", () => {
    if(window.scrollY > window.innerHeight / 2) {
       scrollButton.style.visibility = "visible";
    } else {
       scrollButton.style.visibility = "hidden";
    }
});

scrollButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

displayCUrrentWeather("București")
// picture(buc);



const currentCountry = document.querySelector(".current-country");
const romaniaCountry = document.querySelector(".button-romania");
const spainCountry = document.querySelector(".button-spain");
const franceCountry = document.querySelector(".button-france");
const englandCountry = document.querySelector(".button-england");



spainCountry.addEventListener("click", () => {
    currentCountry.innerHTML = "Spania.";
});

romaniaCountry.addEventListener("click", () => {
    currentCountry.innerHTML = "Romania.";
});

franceCountry.addEventListener("click", () => {
    currentCountry.innerHTML = "Franța.";
});

englandCountry.addEventListener("click", () => {
    currentCountry.innerHTML = "Anglia.";
});
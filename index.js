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
picture(buc);




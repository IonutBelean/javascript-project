const apiKey = "e81f88d6a6bcd1631483569a95f62a0d";

const getCurrentWeatherEndpoint = (city) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${apiKey}`;
};

const getForcastEndpoint = (city) => {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${apiKey}`;
};


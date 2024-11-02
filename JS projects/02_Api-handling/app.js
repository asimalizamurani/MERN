document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("city-input")
    const getWeatherBtn = document.getElementById("search-btn")
    const weatherInfo = document.getElementById("weather-info")
    const cityNameDisplay = document.getElementById("city-name")
    const temperatureDisplay = document.getElementById("temperature")
    const descriptionDisplay = document.getElementById("description")
    const errorMessage = document.getElementById("error-message")

    const API_KEY = "004b1da6dcba15449283f92a1d482768"; // evn variable
    
    getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim()

    if(!city) return;
    
    // it may throw an error
    // server/database is always in another continent

    try {
        const weatherData = await fetchWeatherData(city)
        displayWeatherData(weatherData)
    } catch (error) {
        showError()
    }

})

    async function fetchWeatherData(city) {
        // get the data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics&appid=${API_KEY}`;
        
        const response = await fetch(url)
        console.log("Response", response)

        if(!response) {
            throw new Error("City not found")
        }

        const data = await response.json();
        return data
    }

    function displayWeatherData(data) {
        // display the data
        console.log(data)
        const {name, main, weather} = data

        // unlock the display
        weatherInfo.classList.remove("hidden")
        errorMessage.classList.add("hidden")

        cityNameDisplay.textContent = name
        temperatureDisplay.textContent = `temperature ${main.temp}`
        descriptionDisplay.textContent = `weather ${weather[0].description}`
    }

    function showError(error) {
        // display the error
        weatherInfo.classList.remove("hidden")
        errorMessage.classList.add("hidden")
    }




})
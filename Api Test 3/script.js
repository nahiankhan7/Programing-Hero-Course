const apiKey = "f8f46edd4a7d93a88d1c9c872ef93a20";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inputValue = document.getElementById("input");
const searchButton = document.getElementById("sButton");
const weatherIcon = document.getElementById("tempImg");
const weatherName = document.getElementById("clouds");

function callWeather(city) {
  fetch(apiUrl + city + `&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // Get city name
      const cityName = document.getElementById("cityName");
      cityName.innerHTML = data.name;

      // Get temperature
      const temp = document.getElementById("temp");
      temp.innerHTML = data.main.temp;

      // Get weather icon and name
      if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/cloudy.png";
        weatherName.innerText = "Cloudy";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/sun.png";
        weatherName.innerText = "Clear";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rainy.png";
        weatherName.innerText = "Rain";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/storm.png";
        weatherName.innerText = "Drizzle";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "images/fog.png";
        weatherName.innerText = "Foggy";
      }
    })
    .catch((error) => console.log("Error fetching weather data:", error));
}

searchButton?.addEventListener("click", (e) => {
  e.preventDefault();

  const city = inputValue?.value.trim();

  if (city) {
    callWeather(city);
  } else {
    console.log("Please enter a city name.");
  }
});

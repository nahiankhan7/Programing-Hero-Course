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

      const icon = data.weather[0].main;
      let img = "";
      let text = "";

      switch (icon) {
        case "Clouds":
          img = "images/cloudy.png";
          text = "Cloudy";
          break;

        case "Clear":
          img = "images/sun.png";
          text = "Clear";
          break;

        case "Rain":
          img = "images/rainy.png";
          text = "Rain";
          break;
        case "Drizzle":
          img = "images/storm.png";
          text = "Drizzle";
          break;

        case "Mist":
          img = "images/fog.png";
          text = "Foggy";
          break;
        default:
          console.log("miss match");
      }
      weatherIcon.src = img;
      weatherName.innerText = text;
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

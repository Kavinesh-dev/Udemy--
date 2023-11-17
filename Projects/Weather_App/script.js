let apiKey = "aef547abecaf0de2e2524b2b5557f992";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/—Pngtree—floating realistic clouds_8623463.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/weather-icon-png-11074.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/pngwing.com.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/Mist.png";
  }
}

searchBtn.addEventListener("click", function () {
  checkWeather(searchBox.value.trim());
});

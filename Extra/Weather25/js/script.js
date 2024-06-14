const refresh_btn = document.getElementById("refresh");
const API_KYEY = "bdebfbd56aa02bc66c48751fd367cc66";
const cards = document.getElementById('cards');
const card = document.querySelectorAll(".card");


function getWeather(city) {
  const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city},srilanka&appid=${API_KYEY}`;

  return fetch(weather_url)
    .then((response) => response.json())
    .then((data) => {
      return [data["main"].temp, data["weather"][0].description];
    })
    .catch((error) => {
      return error + "error";
    });
}

function kelvinToCelcius(temp) {
  return Math.floor(temp - 273.15);
}
function createWeatherCard(data) {
  const card = document.createElement("div");
  const temp = document.createElement("p");

  temp.setAttribute("id", "temp");
  temp.innerHTML = kelvinToCelcius(data[0]) + "°C";
  card.appendChild(temp);

  const des = document.createElement("p");
  des.innerHTML = data[1];
  card.appendChild(des);

  return card;
}


card.forEach((card) => {
  let city = card.querySelector("button").value;
  getWeather(city).then((data) => {
    const weather_card = createWeatherCard(data);
    card.appendChild(weather_card);
  });
});

function sortWeatherCards(){
    
}
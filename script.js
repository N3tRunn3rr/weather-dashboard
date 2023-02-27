var Key = 'bdebbabb7b2ac75814efae181908c540';
var searchInput = document.getElementById('textBox');
var searchBtn = document.querySelector('searchButton');
var savedSearches = [];

var previousSearches = function(cityName) {
  var searchedCity = document.querySelector('.searchResults');
  searchedCity.text(cityName)
}

function saveSearch() {
  var data = document.getElementById("textBox").value;
  localStorage.setItem("savedText", data);
  console.log(data);
  alert("Search saved successfully: " + data);
};

document.getElementById('searchBtn').onclick = function(event) {
  alert("Search button was clicked");
  saveSearch();
  getWeather();
  event.preventDefault();
};

function getWeather() {
var selectedCity = document.getElementById('textBox').value;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${Key}&units=metric`)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    console.log(response);
    console.log(lon);
    console.log(lat);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${Key}`)
      .then(function (response) {
      return response.json();
  })
  .then(function(response){
    console.log(response)
    
    var forecastTime = response.list[3].dt_txt;
    var timeArray = forecastTime.split(' ');
    console.log(timeArray);
  })
  });
};
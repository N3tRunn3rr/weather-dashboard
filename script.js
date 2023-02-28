var Key = 'bdebbabb7b2ac75814efae181908c540';
var searchInput = document.getElementById('textBox');
var searchBtn = document.querySelector('searchButton');
var savedSearches = [];

var previousSearches = function(cityName) {
  var searchedCity = document.querySelector('.searchResults');
  searchedCity.text(cityName)
}

var searchHistory = (localStorage.searchHistory) ? JSON.parse(localStorage.searchHistory) : [];
function saveSearch() {
  var savedSearch = document.getElementById("textBox").value;
  localStorage.setItem("savedText", savedSearch);
  searchHistory.push(savedSearch);
  localStorage.searchHistory = JSON.stringify(searchHistory);
  console.log(savedSearch);
  alert("Search saved successfully: " + savedSearch);
};

document.getElementById('searchBtn').onclick = function(event) {
  alert("Search button was clicked");
  saveSearch();
  getWeather();
  event.preventDefault();
};

function getWeather() {
var selectedCity = document.getElementById('textBox').value;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${Key}&units=imperial`)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    var lat = response.coord.lat;
    var lon = response.coord.lon;
    console.log(response);
    console.log(lon);
    console.log(lat);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${Key}`)
      .then(function (response) {
      return response.json();
  })
  .then(function(response){
    console.log(response)
    
    var forecastHours = response.list[0].dt_txt;
    //date and time for response
    console.log(forecastHours);

    var forecastTemp = response.list[0].main.temp;
    //temperature for response
    console.log(forecastTemp + ' Degrees Fahrenheit');

    var forecastWind = response.list[0].wind.speed;
    //wind speed for response
    console.log(forecastWind + ' mph');

    var forecastHumidity = response.list[0].main.humidity;
    //humidity for response
    console.log(forecastHumidity + '%');

    //TODO: work on getting the results back for the same time block each day
    //TODO: possibly using an if else statement with between two values to select only those specific time blocks that I want the datasets for
  })
  });
};
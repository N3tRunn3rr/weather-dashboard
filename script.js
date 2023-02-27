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
    
    var forecastArray1 = response.list[3].dt_txt;
    var timeArray = forecastArray1.split(' ');
    console.log(timeArray);

    var forecastArray2 = response.list[11].dt_txt;
    var timeArray2 = forecastArray2.split(' ');
    console.log(timeArray2);

    var forecastArray3 = response.list[19].dt_txt;
    var timeArray3 = forecastArray3.split(' ');
    console.log(timeArray3);

    var forecastArray4 = response.list[27].dt_txt;
    var timeArray4 = forecastArray4.split(' ');
    console.log(timeArray4);

    var forecastArray5 = response.list[5].dt_txt;
    var timeArray5 = forecastArray5.split(' ');
    console.log(timeArray5);

    //TODO: work on getting the results back for the same time block each day
    //TODO: possibly using an if else statement with between two values to select only those specific time blocks that I want the datasets for
  })
  });
};
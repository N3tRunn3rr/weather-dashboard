var Key = 'bdebbabb7b2ac75814efae181908c540';
var searchInput = document.getElementById('textBox');
var searchBtn = document.querySelector('searchButton');
var previousSearches = [];

//TODO: everything is working except getting the search history to display on the page and to update the buttons with the search history

function saveSearch() {
  var savedSearch = document.getElementById("textBox").value;
  localStorage.setItem("savedText", savedSearch);
  console.log(savedSearch);
  // alert("Search saved successfully: " + savedSearch);
  previousSearches.push(JSON.stringify(savedSearch));
  console.log('Search History Array: ' + previousSearches);
  localStorage.setItem('previousSearches',(previousSearches));
  // var cities = localStorage.getItem("savedText");
  $("button.search-history1").on("click", function() {
    $("button.search-history1").attr("href", savedSearch);
    // $("button.search-history1").text(savedSearch);
    // var history = localStorage.getItem("previousSearches");
    $("button.search-history1").on("click", function(e) {
      e.preventDefault();
      getWeather();
  })
})
};
  
  // $("li.city-list").text(previousSearches);
;

document.getElementById('searchBtn').onclick = function(event) {
  // alert("Search button was clicked");
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

    
    var currentTemp = response.main.temp;
    $('p.current-temp').text('Temp: ' + currentTemp + ' Degrees Fahrenheit');

    var currentHumidity = response.main.humidity;
    $('p.current-humidity').text('Humidity: ' + currentHumidity + '%');

    var currentWind = response.wind.speed; 
    $('p.current-wind').text('Wind Speed: ' + currentWind + 'mph');

    var iconCode = response.weather[0].icon;
    var iconUrl = 'http://openweathermap.org/img/w/' + iconCode + ".png";
    $('img.icon').attr('src', iconUrl);

    ;

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
    
    //date and time for response
    var forecastHours = response.list[0].dt_txt;
    $('p#future-date-1').text('Date: ' + forecastHours);
    console.log(forecastHours);

    //temperature for response
    var forecastTemp = response.list[0].main.temp;
    $('p#future-temp-1').text('Temp: ' + forecastTemp + ' Degrees Fahrenheit');
    console.log(forecastTemp + ' Degrees Fahrenheit');

    //wind speed for response
    var forecastWind = response.list[0].wind.speed;
    $('p#future-wind-1').text('Wind Speed: ' + forecastWind + 'mph');
    console.log(forecastWind + ' mph');

    //humidity for response
    var forecastHumidity = response.list[0].main.humidity;
    $('p#future-humidity-1').text('Humidity: ' + forecastHumidity + '%');
    console.log(forecastHumidity + '%');

    //icon for response
    var iconCode1 = response.list[0].weather[0].icon;
    var iconUrl1 = 'http://openweathermap.org/img/w/' + iconCode1 + ".png";
    $('img.icon1').attr('src', iconUrl1);

    //Card 2 
    var forecastHours2 = response.list[8].dt_txt;
    $('p#future-date-2').text('Date: ' + forecastHours2);
    console.log(forecastHours2);
    
    var forecastTemp2 = response.list[8].main.temp;
    $('p#future-temp-2').text('Temp: ' + forecastTemp2 + ' Degrees Fahrenheit');
    console.log(forecastTemp2 + ' Degrees Fahrenheit');
    
    var forecastWind2 = response.list[8].wind.speed;
    $('p#future-wind-1').text('Wind Speed: ' + forecastWind2 + 'mph');
    console.log(forecastWind + ' mph');
    
    var forecastHumidity2 = response.list[8].main.humidity;
    $('p#future-humidity-2').text('Humidity: ' + forecastHumidity2 + '%');
    console.log(forecastHumidity2 + '%');

    var iconCode2 = response.list[8].weather[0].icon;
    var iconUrl2 = 'http://openweathermap.org/img/w/' + iconCode2 + ".png";
    $('img.icon2').attr('src', iconUrl2);

    //Card 3
    var forecastHours3 = response.list[16].dt_txt;
    $('p#future-date-3').text('Date: ' + forecastHours3);
    console.log(forecastHours3);
  
    var forecastTemp3 = response.list[16].main.temp;
    $('p#future-temp-3').text('Temp: ' + forecastTemp3 + ' Degrees Fahrenheit');
    console.log(forecastTemp3 + ' Degrees Fahrenheit');
  
    var forecastWind3 = response.list[16].wind.speed;
    $('p#future-wind-3').text('Wind Speed: ' + forecastWind3 + 'mph');
    console.log(forecastWind3 + ' mph');
  
    var forecastHumidity3 = response.list[16].main.humidity;
    $('p#future-humidity-3').text('Humidity: ' + forecastHumidity3 + '%');
    console.log(forecastHumidity3 + '%');

    var iconCode3 = response.list[16].weather[0].icon;
    var iconUrl3 = 'http://openweathermap.org/img/w/' + iconCode3 + ".png";
    $('img.icon3').attr('src', iconUrl3);

    //Card 4
    var forecastHours4 = response.list[24].dt_txt;
    $('p#future-date-4').text('Date: ' + forecastHours4);
    console.log(forecastHours4);
    
    var forecastTemp4 = response.list[24].main.temp;
    $('p#future-temp-4').text('Temp: ' + forecastTemp4 + ' Degrees Fahrenheit');
    console.log(forecastTemp4 + ' Degrees Fahrenheit');
    
    var forecastWind4 = response.list[24].wind.speed;
    $('p#future-wind-4').text('Wind Speed: ' + forecastWind4 + 'mph');
    console.log(forecastWind4 + ' mph');
    
    var forecastHumidity4 = response.list[24].main.humidity;
    $('p#future-humidity-4').text('Humidity: ' + forecastHumidity4 + '%');
    console.log(forecastHumidity4 + '%');

    var iconCode4 = response.list[24].weather[0].icon;
    var iconUrl4 = 'http://openweathermap.org/img/w/' + iconCode4 + ".png";
    $('img.icon4').attr('src', iconUrl4);

    //Card 5
    var forecastHours5 = response.list[32].dt_txt;
    $('p#future-date-5').text('Date: ' + forecastHours5);
    console.log(forecastHours5);
  
    var forecastTemp5 = response.list[32].main.temp;
    $('p#future-temp-5').text('Temp: ' + forecastTemp5 + ' Degrees Fahrenheit');
    console.log(forecastTemp5 + ' Degrees Fahrenheit');
  
    var forecastWind5 = response.list[32].wind.speed;
    $('p#future-wind-5').text('Wind Speed: ' + forecastWind5 + 'mph');
    console.log(forecastWind5 + ' mph');
  
    var forecastHumidity5 = response.list[32].main.humidity;
    $('p#future-humidity-5').text('Humidity: ' + forecastHumidity5 + '%');
    console.log(forecastHumidity5 + '%');

    var iconCode5 = response.list[32].weather[0].icon;
    var iconUrl5 = 'http://openweathermap.org/img/w/' + iconCode5 + ".png";
    $('img.icon5').attr('src', iconUrl5);
  })
  });
};

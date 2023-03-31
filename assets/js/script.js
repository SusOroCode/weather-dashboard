//var apiUrlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=imperial`;
//var apiUrlForecast = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';

//GLOBAL VARIABLES

var searchFormEl = document.querySelector('#weather-search-form');
var enterCityEl = document.querySelector('#enter-city');
var submitButtenEl = document.querySelector('#submit');
var cityNameEl = document.querySelector('#city-name');
var pastSearchEl = document.querySelector('#past-search');
var todayWeatherEl = document.querySelector('#today-weather');
var fiveDayForecastEl = document.querySelector('#forecast-five-day');
var city;
var APIKey = '91d4837977f02f96f0a5781cb7dbd37d';

function cityFormSubmit(event) {
    event.preventDefault();

    var formInputValue = enterCityEl.value;
    displayWeather(formInputValue);

}

    function displayWeather(formInputValue) {
        var queryURL = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKey}&q=${formInputValue}&units=imperial`;
    
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data); // It works! :) YAY

        });
};

function renderResponse(userData) {
    document.querySelector
}

//Add event listener to form (type submit)

document.getElementById('button').addEventListener('click', cityFormSubmit);
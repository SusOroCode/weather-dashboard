//var apiUrlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=imperial`;
//var apiUrlForecast = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';

// RESOURCE FOR LONGITUDE AND LATITUDE: https://blog.logrocket.com/detect-location-and-local-timezone-of-users-in-javascript-3d9523c011b9/
// RESOURCE HOW TO INCLUDE INFORMATION IN ARRAY https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

//GLOBAL VARIABLES

var searchFormEl = document.querySelector('#weather-search-form');
var enterCityEl = document.querySelector('#enter-city');
var submitButtenEl = document.querySelector('#submit');
var cityNameEl = document.querySelector('#city-name');
var pastSearchEl = document.querySelector('#past-search');

var fiveDayForecastEl = document.querySelector('#forecast-five-day');
var city;
var APIKey = '91d4837977f02f96f0a5781cb7dbd37d';
var searchHistory = [];

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
            
            var cityLat = data.coord.lat;
            var cityLon = data.coord.lon;
            var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&units=imperial&appid=${APIKey}`;

            fetch(forecastURL)
            .then(function(response) {
                return response.json();
            })

           // .then(function(response) {
             //   if (searchHistory.includes(data.name) === false) {
             //       searchHistory.push(data.name);
             //       localStorage.setItem('city', JSON.stringify(pastSearchEl));
             //      }

              //     displayCity();
              //     console.log(response);

           // })

           var todayWeatherEl = document.querySelector('#today-weather');
           todayWeatherEl.addClass('today-weather');

           var todayDayEl = djs().format('MM/DD/YYYY');

           var todayCityEl = document.querySelector('#today-city');
           todayCityEl.textContent(formInputValue, todayDayEl);

           var todayIconEl = document.querySelector('#today-weather-icon');
           todayIconEl.addClass('today-weather-icon');
           
           var todayIconCodeEl = response.current.weather[0].icon;
           todayIconEl.attr('src', 'https://openweathermap.org/img/wn/${todayIconCodeEl}@2x.png');

           var 




              
        });
};

function renderResponse(userData) {
    document.querySelector
}

//Add event listener to form (type submit)

document.getElementById('button').addEventListener('click', cityFormSubmit);
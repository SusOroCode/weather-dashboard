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
var todayWeatherContainerEl = document.querySelector('#today-weather');
var todayCityWeatherEl = document.querySelector('#today-city');

var fiveDayForecastEl = document.querySelector('#forecast-five-day');
var city;
var APIKey = '91d4837977f02f96f0a5781cb7dbd37d';
var searchHistory = [];
dayjs();


// Submission of City for Weather Search

function cityFormSubmit(event) {
    event.preventDefault();

    var formInputValue = enterCityEl.value.trim();
    if(formInputValue) {
        getCity(formInputValue);
        getForecast(formInputValue);
        searchHistory.push(formInputValue);
        localStorage.setItem('cityValue', JSON.stringify(searchHistory));
        enterCityEl.value = '';
    } else {
        alert('Please enter a City to see the weather forecast.')
    }
   
};

    var clickCitySearch = function(event) {
        
        var clickPreviousCity = event.currentTarget.textContent;
        getCityWeather(clickPreviousCity);
        getForecastWeather(clickPreviousCity);
    };

    // Current Weather from API

    function getCity(formInputValue) {
        var queryURL = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKey}&q=${formInputValue}&units=imperial`;
    
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayWeather(data, formInputValue); // It works! :) YAY
        });
    };
     
    var displayWeather = function(data, formInputValue) {
        todayWeatherContainerEl.textContent = '';
        todayCityWeatherEl.textContent = searchCityWeather;

        var displayDate = document.querySelector('#today-date');
        var todayDate = dayjs();
        console.log(displayDate);
        displayDate.textContent.data = todayDate.format('MM/DD/YYYY');

        var displayWeatherIcon = document.querySelector('#today-weather-icon');
        var todayIcon = "https://openweathermap.org/img/wn/" + formInputValue.weather[0].icon + "@2x.png";
        displayWeatherIcon.setAttribute ('src', todayIcon);

        var displayTemperature = document.querySelector('#today-Temp');
        var todayTemp = math.round(formInputValue.main.temp) + '℉';
        displayTemperature.textContent = todayTemp;

        var displayWind = document.querySelector('#today-wind');
        var todayWind = formInputValue.main.wind.speed + 'MPH';
        displayWind.textContent = todayWind;

        var displayHumidity = document.querySelector('#today-hum');
        var todayHum = formInputValue.main.humidity + '%';
        displayHumidity.textContent = todayHum;

        var enterCityEl = document.createElement('li');
        enterCityEl.classname = 'past-search-cities';
        enterCityEl.textContent = searchCity;
        enterCityEl.addEventListener('click', cityFormSubmit);
        pastSearchEl.appendChild(enterCityEl);
           

    };


           // .then(function(response) {
             //   if (searchHistory.includes(data.name) === false) {
             //       searchHistory.push(data.name);
             //       localStorage.setItem('city', JSON.stringify(pastSearchEl));
             //      }

              //     displayCity();
              //     console.log(response);

           // })

          

function getForecast(formInputValue) {

   // var queryURL = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKey}&q=${formInputValue}&units=imperial`;

    //fetch(queryURL)
   // .then(function(response) {
   //     return response.json();
   // })
  //  .then(function(data) {
   //     var cityLat = data.coord.lat;
   //     var cityLon = data.coord.lon;
  //  });

      //  var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&units=imperial&appid=${APIKey}`;
      var forecastURL = `https://api.openweathermap.org/data/2.5/weather?appid=${APIKey}&q=${formInputValue}&units=imperial`;
       
      fetch(forecastURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayForecast(data.list);

            //TO DO: WRITE FORECAST ELEMENTS AND DATA
            //WRITE SEARCH HISTORY AND DISPLAY
        });
    };


function displayForecast(list) {
    console.log(list);
}


//Add event listener to form (type submit)

document.getElementById('button').addEventListener('click', cityFormSubmit);
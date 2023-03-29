var apiUrlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=imperial`;
var apiUrlForecast = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';

var apiKey = '43dcd3f9c299335aeb92b0cf181183cc';

var weatherFormEl = document.querySelector('#weather-city-form');
var enterCityEl = document.querySelector('#enter-city');
var submitButtenEl = document.querySelector('#submit');

function cityFormSubmit(event) {
    event.preventDefault();

    var formInputValue = enterCityEl.value;
    console.log('user input: ' + formInputValue);

    var apiUrlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=imperial`
}   

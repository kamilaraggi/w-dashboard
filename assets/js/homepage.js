
//var cityFormEl = document.querySelector("#form-input");
//var cityInputEl = document.querySelector("#city");
//var currentWeatherEl = document.querySelector("#current-weather");

var getUserCity = function(cityName) {
   fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + "b08cb2b5801d3392ed02e64840da40e7");


};
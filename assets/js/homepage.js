var button = document.querySelector('.button');
var inputCity = document.querySelector ('.inputCity')
var cityname = document.querySelector('.cityname');
var descript = document.querySelector('.descript');
var temperature = document.querySelector('.temperature');

button.addEventListener('click',function(){
    var search = inputCity.value
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+search+'&appid=51da3ef96280e0ef29f115a548759117')
    .then(response => response.json())
    .then(data => 
       {
       //var citynameValue = data['name'];
        var temperatureValue = data['main']['temp'];
        var descriptValue = data['weather'][0]['description'];
        
       //cityname.innerHTML = nameValue;
       temperature.innerHTML = temperatureValue;
       descript.innerHTML = descriptValue;
       })
       
     

    .catch(err => alert("Invalid Input!"))

})


//const forecastEls = document.querySelector();
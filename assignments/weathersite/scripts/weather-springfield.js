let weatherRequest = new XMLHttpRequest();
var apiURL = '//api.openweathermap.org/data/2.5/weather?zip=65804&units=imperial&APPID=08d433d824f2b525f8146f0f5857871c';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('current-weather-description').innerHTML = weatherData.weather[0].description;
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
    document.getElementById('high-temp').innerHTML = weatherData.main.temp_max;
    document.getElementById('low-temp').innerHTML = weatherData.main.temp_min;
    document.getElementById('wind-speed').innerHTML = weatherData.wind.speed;
    
    var iconCode = weatherData.weather[0].icon;
    var iconPath = "//openweathermap.org/img/w/" + iconCode + ".png";
    document.getElementById('weather-icon').src = iconPath;
}
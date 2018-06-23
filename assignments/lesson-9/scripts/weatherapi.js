let weatherRequest = new XMLHttpRequest();
var apiURL = '//api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=08d433d824f2b525f8146f0f5857871c';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
    
    var iconCode = weatherData.weather["0"].icon;
    var iconPath = "//openweathermap.org/img/w/" + iconCode + ".png";
    document.getElementById('weather-icon').src = iconPath;
}
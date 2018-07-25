/*Input: from the body tags
 *Processing: reads the parsed JSON file and consumes it, calls a function to compute for the average temp, and then computes for the windchill value
 *Output: displays the windchill value in the specific body section
 */

function computeAveTemp (hTemp, lTemp) {
  var aveTempComp = (hTemp + lTemp)/2;
  return aveTempComp;
}

function computeWindchillValue (aveTemp, wSpeed) {
  var windchillPow = Math.pow(wSpeed, 0.16);
  var windchillComp = 35.74 + (0.6215 * aveTemp) - (35.75 * windchillPow) + 0.4275 * aveTemp * windchillPow;
  return windchillComp;
}

let windChillRequest = new XMLHttpRequest();
var apiURL = '//api.openweathermap.org/data/2.5/weather?zip=65804&units=imperial&APPID=08d433d824f2b525f8146f0f5857871c';
windChillRequest.open('GET', apiURL, true);
windChillRequest.send();
windChillRequest.onload =  function () {
    let weatherData = JSON.parse(windChillRequest.responseText);
    console.log(weatherData);
    
    var hTemp = weatherData.main.temp_max;
    var lTemp = weatherData.main.temp_min;
    var wSpeed = weatherData.wind.speed;
    var aveTemp = computeAveTemp(hTemp, lTemp);
    var windchillValue = computeWindchillValue(aveTemp, wSpeed);
    document.getElementById('displayWindchillValue').innerHTML = windchillValue.toFixed (2);
}
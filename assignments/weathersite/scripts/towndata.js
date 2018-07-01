let townDataRequest = new XMLHttpRequest();
var apiURL = '//byui-cit230.github.io/weather/data/towndata.json';
townDataRequest.open('GET', apiURL, true);
townDataRequest.responseType = 'json';
townDataRequest.send();
townDataRequest.onload = function () {
    let townData = townDataRequest.response;
    console.log(townData);
    
    //first city data
    document.getElementById('first-city-name').innerHTML = townData.towns[0].name;
    document.getElementById('first-city-motto').innerHTML = townData.towns[0].motto;
    document.getElementById('first-city-year-founded').innerHTML = townData.towns[0].yearFounded;
    document.getElementById('first-city-population').innerHTML = townData.towns[0].currentPopulation;
    document.getElementById('first-city-ave-rainfall').innerHTML = townData.towns[0].averageRainfall;
    
    //second city data
    document.getElementById('second-city-name').innerHTML = townData.towns[1].name;
    document.getElementById('second-city-motto').innerHTML = townData.towns[1].motto;
    document.getElementById('second-city-year-founded').innerHTML = townData.towns[1].yearFounded;
    document.getElementById('second-city-population').innerHTML = townData.towns[1].currentPopulation;
    document.getElementById('second-city-ave-rainfall').innerHTML = townData.towns[1].averageRainfall;
    
    //third city data
    document.getElementById('third-city-name').innerHTML = townData.towns[3].name;
    document.getElementById('third-city-motto').innerHTML = townData.towns[3].motto;
    document.getElementById('third-city-year-founded').innerHTML = townData.towns[3].yearFounded;
    document.getElementById('third-city-population').innerHTML = townData.towns[3].currentPopulation;
    document.getElementById('third-city-ave-rainfall').innerHTML = townData.towns[3].averageRainfall;
}
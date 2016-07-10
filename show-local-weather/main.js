var locUrl = "http://ipinfo.io/json";
var appId = '&appid=be99c644d8454baa7d35af811b204401';
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';

function xhrURL(url) {
    return new Promise(function (resolve, reject){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onload = function() {
    	    if (xhr.readyState == 4 && xhr.status == 200) {
		resolve(JSON.parse(xhr.responseText));
    	    }
	};
	xhr.onerror = function() {
	    reject(new Error(xhr.statusText));
	};
	xhr.send();
    });
}

xhrURL(locUrl).then(function(response) {
    var city = response.city;
    var country = response.country;
    var pLoc = document.getElementById('loc');
    pLoc.innerHTML = city + ' , ' +  country;
    return city;
}).then(function(city) {
    var weatherUrl = api + city + appId;
    xhrURL(weatherUrl).then(function(response){
	var celDegree = ' &#176C';
	var kelvinTemp = response.main.temp;
	var weather = response.weather[0].main;
	getIcon(weather);
	var celTemp = Math.floor(kelvinTemp - 273.15);
	var FahTemp = Math.floor(kelvinTemp * 9 / 5 - 459.67);
	var bTemp = document.getElementById('temp');
	var pWeather = document.getElementById('weather');
	bTemp.innerHTML = celTemp + celDegree;
	pWeather.innerHTML = weather;
	return celTemp;
    }).then(function(celTemp) {
	var FahTemp = Math.floor(celTemp * 9 / 5 + 32);
	var FahDegree = ' &#176F';
	var bTemp = document.getElementById('temp');
	bTemp.onclick = function() {
	    bTemp.innerHTML = FahTemp + FahDegree;
	};
    });
});

function getIcon(weather) {
    var weatherIcon = document.getElementById('weather-icon');
    switch(weather) {
    case 'Clouds':
	weatherIcon.className += ' wi wi-cloudy';
	break;
    case 'Rain':
	weatherIcon.className += ' wi wi-rain';
	break;
    case 'Snow':
	weatherIcon.className += ' wi wi-snow';
	break;
    case 'Drizzle':
	weatherIcon.className += ' wi wi-sprinkle';
	break;
    case 'Clear':
	weatherIcon.className += ' wi wi-cloud';
	break;
    case 'Atmosphere':
	weatherIcon.className += ' wi wi-gale-warning';
	break;
    case 'Extreme':
	weatherIcon.className += ' wi wi-tornado';
	break;
    case 'Thunderstorm':
	weatherIcon.className += ' wi wi-thunderstorm';
	break;
    case 'Mist':
	weatherIcon.className += ' wi wi-fog';
	break;
    }
}

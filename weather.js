document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('seeWeather').addEventListener('click', function() {
        var city = document.getElementById('CityName').value;
        var apiKey = '9920008360e6212a01a59fd9eb579f46';
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                displayWeather(data);
            } else if (xhr.readyState === 4) {
                alert('Failed to fetch weather data. Please try again.');
            }
        };
        xhr.send();
    });
});

function displayWeather(data) {
    var WeatherDetails = document.getElementById('WeatherDetails');
    WeatherDetails.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

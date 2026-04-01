const btn = document.getElementById('searchbtn');
const city = document.getElementById('cityname');
const temp = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const clouds = document.querySelector('.images')
const clouddetail = document.querySelector('#clouddetail')
const wind = document.getElementById('wind');
const feelslike = document.getElementById('feelslike');






function getWeather(input) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=82842b5b39a17ed3d792c41bb049ff73&units=metric`)
        .then(res => res.json())
        .then(data => {

            if (data.cod !== 200) {
                throw new Error("City not found");
            }

            // Cloud logic
            if (data.clouds.all >= 70) {
                clouds.innerText = "☁️";
                clouddetail.innerText = "Overcast";
            } else if (data.clouds.all >= 30) {
                clouds.innerText = "⛅";
                clouddetail.innerText = "Partly cloudy";
            } else if (data.clouds.all >= 1) {
                clouds.innerText = "🌤";
                clouddetail.innerText = "Few Clouds";
            } else {
                clouds.innerText = "☀️";
                clouddetail.innerText = "Sunny";
            }

            // Main data
            city.innerText = data.name;
            temp.innerText = `${data.main.temp} °C`;
            humidity.innerText = `💧 Humidity: ${data.main.humidity}%`;
            wind.innerText = `💨 Wind: ${data.wind.speed} m/s`;
            feelslike.innerText = `👁️ Feels like: ${data.main.feels_like} °C`;
        })
        .catch(() => {
            city.innerText = "City not found ❌";
            temp.innerText = "";
            humidity.innerText = "";
            wind.innerText = "";
            feelslike.innerText = "";
            clouds.innerText = "";
            clouddetail.innerText = "";
        });
}


document.addEventListener("DOMContentLoaded", () => {
    getWeather("Pune"); // default city
});



btn.addEventListener('click', () => {
    const input = document.getElementById('search').value || "Pune";
    getWeather(input);
});













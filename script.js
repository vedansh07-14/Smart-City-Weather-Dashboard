const btn = document.getElementById('searchbtn');
const city = document.getElementById('cityname');
const temp = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const clouds = document.querySelector('.images')
const clouddetail = document.querySelector('#clouddetail')
const wind = document.getElementById('wind');
const feelslike = document.getElementById('feelslike');

const toggle = document.querySelector('.switch input');

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

            const wear = getWearSuggestion(
                data.main.temp,
                data.weather[0].main,
                data.wind.speed
                );
            document.getElementById("wearTitle").innerText = wear.title;
            document.getElementById("wearDesc").innerText = wear.desc;
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

function getForecast(input) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=82842b5b39a17ed3d792c41bb049ff73&units=metric`)
        .then(res => res.json())
        .then(data => {

            const forecastContainer = document.getElementById("forecast");
            forecastContainer.innerHTML = "";

            // Take one data per day (every 8th item)
            const dailyData = data.list.filter((item, index) => index % 8 === 0);

            dailyData.forEach(day => {
                const date = new Date(day.dt_txt).toDateString().slice(0, 3);
                const temp = Math.round(day.main.temp);
                const weather = day.weather[0].main;

                const card = `
                    <div class="forecast-card">
                        <h4>${date}</h4>
                        <p class="icon">${getWeatherIcon(weather)}</p>
                        <p>${temp}°C</p>
                        <p>${weather}</p>
                    </div>
                `;

                forecastContainer.innerHTML += card;
            });

        })
        .catch(err => console.error("Forecast error:", err));
}

function getWeatherIcon(weather) {
    if (weather.includes("Cloud")) return "☁️";
    if (weather.includes("Rain")) return "🌧";
    if (weather.includes("Clear")) return "☀️";
    if (weather.includes("Snow")) return "❄️";
    return "🌤";
}


document.addEventListener("DOMContentLoaded", () => {
    getWeather("Pune");
    getForecast("Pune"); // default city
});



btn.addEventListener('click', () => {
    const input = document.getElementById('search').value || "Pune";
    getWeather(input);
    getForecast(input);
});

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});


function getWearSuggestion(temp, weather, wind) {
    if (weather.includes("Rain")) {
        return {
            title: "Carry an Umbrella",
            desc: "Rain expected. Wear light clothes and waterproof footwear."
        };
    }

    if (wind > 5) {
        return {
            title: "Pack a Light Shell & Scarf",
            desc: "The winds are picking up. A medium jacket and scarf will keep you comfortable."
        };
    }

    if (temp >= 30) {
        return {
            title: "Stay Cool & Light",
            desc: "Hot weather. Wear breathable clothes, sunglasses, and stay hydrated."
        };
    }

    if (temp >= 20) {
        return {
            title: "Comfortable Casual Wear",
            desc: "Perfect weather for t-shirts and jeans with sneakers."
        };
    }

    return {
        title: "Layer Up",
        desc: "Cold weather. Wear jackets and warm layers to stay cozy."
    };
}











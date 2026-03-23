# 🌦️ Smart City Weather Dashboard

## 📌 Overview

The **Smart City Weather Dashboard** is a modern, interactive web application that provides real-time weather insights along with intelligent lifestyle recommendations.

The goal of this project is to demonstrate strong capabilities in **API integration, frontend development, and data-driven UI design**, while delivering a practical tool that enhances everyday decision-making.

---

## 🎯 Purpose

This application helps users:

* Stay updated with real-time weather conditions
* Plan their day using accurate forecasts
* Receive smart suggestions such as **"What to Wear"** based on weather data

---

## 🔗 API Used

* **OpenWeatherMap API**

  * Current Weather Endpoint
  * 5-Day Forecast Endpoint

Example API Call:

```
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
```

---

## 🚀 Features

* Search weather by city name
* Auto-detect user location using Geolocation API
* Real-time weather data (temperature, humidity, wind speed, etc.)
* 5-day weather forecast
* Smart recommendation system ("What to Wear")
* Filter and sort forecast data using JavaScript HOFs
* Dynamic UI based on weather conditions
* Dark / Light mode toggle with localStorage persistence
* Global city comparison dashboard

---

## 🛠️ Tech Stack

* **HTML5** – Structure
* **CSS** – Styling and responsive design
* **JavaScript (ES6+)** – Logic and interactivity
* **OpenWeatherMap API** – Data source

---

## ⚙️ How It Works

1. The application fetches weather data from the OpenWeatherMap API
2. It uses the browser's Geolocation API to detect the user's current location
3. Weather data is processed using JavaScript
4. Smart recommendations are generated based on temperature and conditions
5. UI dynamically updates based on weather changes
6. User preferences (like theme) are stored using localStorage

---

## 📦 Setup & Installation

1. Clone the repository:

```
git clone https://github.com/vedansh07-14/Smart-City-Weather-Dashboard.git
```

2. Navigate to the project folder:

```
cd Smart-City-Weather-Dashboard
```

3. Open `index.html` in your browser

---

## 🔐 API Key Setup

```
const API_KEY = "82842b5b39a17ed3d792c41bb049ff73";
```

---

## 📈 Future Enhancements

* 📊 Weather charts and data visualization
* 🔔 Alerts for extreme weather conditions
* 📱 Progressive Web App (PWA) support
* 🌐 Multi-language support

---

## 🤝 Contribution

Contributions, issues, and feature requests are welcome.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 💡 Author

Developed by **Vedansh**



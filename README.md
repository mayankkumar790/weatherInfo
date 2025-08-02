# 🌤️ WeatherInfo

Welcome to **WeatherInfo** – a simple, clean, and elegant weather forecast web app built with **HTML**, **CSS**, and **JavaScript**. It fetches real-time weather data and provides a user-friendly experience to check the weather conditions for any city in the world.

---
🔗 Live Site: weather-info-city.netlify.app

## 🔍 Features

### 🔎 Search City
- Users can enter any city name in the search box.
- On entering a valid city (e.g., `Tokyo`), the app fetches current weather and a 3-day forecast.
- It displays:
  - Temperature in °C
  - Weather condition (like Clouds, Rain, Clear)
  - Humidity %
  - Wind Speed
  - Daily forecast cards (only shown at **12:00 PM** data point for each day)

### ❌ City Not Found
- If a user enters an invalid city (like `abcdxyz`), a **404 page** is shown with an error illustration.
- This makes it visually clear that the location was not found.

### 🌍 Weather Cards
- Forecast cards are dynamically created only for relevant days at 12:00 PM to keep the forecast meaningful.
- Dates are formatted neatly (e.g., **Jul 21**) and weather icons reflect real conditions.

---

## ⚙️ Technologies Used
- **HTML**: Structure
- **CSS**: Responsive design and custom styling
- **JavaScript**: API fetch, DOM manipulation, error handling
- **OpenWeatherMap API**: Real-time weather and forecast data

---

## 📁 Project Structure


---

## 📸 Preview

| Initial State | Valid City | Invalid City |
|---------------|------------|--------------|
| [Search]<img width="1366" height="635" alt="Search-city" src="https://github.com/user-attachments/assets/32b150f8-f8f9-41d5-98f0-6e9135822416" />| [City]<img width="1366" height="640" alt="City" src="https://github.com/user-attachments/assets/a47fef17-d779-498e-afa6-fb57d2fea639" /> | [404] <img width="1366" height="638" alt="Not-found" src="https://github.com/user-attachments/assets/33463e04-b496-4496-b240-202e10d67fd8" />|

---

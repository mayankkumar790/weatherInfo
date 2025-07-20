# 🌤️ WeatherInfo

Welcome to **WeatherInfo** – a simple, clean, and elegant weather forecast web app built with **HTML**, **CSS**, and **JavaScript**. It fetches real-time weather data and provides a user-friendly experience to check the weather conditions for any city in the world.

---

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
| ![Search](screenshots/se.png) | ![Tokyo](screenshots/tokyo.png) | ![404](screenshots/404.png) |

---

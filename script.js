const cityInput = document.querySelector('.city-input')
const searchBtn = document.querySelector('.search-btn')

const weatherinfoSection = document.querySelector('.weather-info')
const notFoundSection = document.querySelector('.not-found')
const searcCitySection = document.querySelector('.search-city')

const countryTxt = document.querySelector('.country-txt')
const tempTxt = document.querySelector('.temp-txt')
const conditionTxt = document.querySelector('.condition-txt')
const humidityValueTxt = document.querySelector('.humidity-value-txt')
const windValueTxt = document.querySelector('.wind-value-txt')
const weatherSummaryImg = document.querySelector('.weather-summary-img')
const currentDataTxt = document.querySelector('.current-data-txt')

const forecastItemsContainer = document.querySelector('.forecast-item-container')

const apikey = '335b76afefc8496c50227e4e0a3ce1d8'

searchBtn.addEventListener('click', () => {
    if (cityInput.value.trim() != '') {
        updateWeatherInfo(cityInput.value)
        cityInput.value = ''
        cityInput.blur()
    }
})
cityInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' &&
        cityInput.value.trim() != ''
    ) {
        updateWeatherInfo(cityInput.value)
        cityInput.value = ''
        cityInput.blur()
    }
})


async function getfetchData(endPoint, city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apikey}&units=metric`;

    const response = await fetch(apiurl)
    return response.json()
}

function getWeatherIcon(id) {
    if (id <= 232)
        return 'thunderstrom.svg'
    if (id <= 321)
        return 'drizzle.svg'
    if (id <= 531)
        return 'rain.svg'
    if (id <= 622)
        return 'snow.svg'
    if (id <= 781)
        return 'atmosphere.svg'
    if (id <= 800)
        return 'clear.svg'
    else
        return 'clouds.svg'
}

function getCurrentData() {
    const currentData = new Date()
    const options = {
        weekday: 'short',
        day: '2-digit',
        month: 'short'
    }
    return currentData.toLocaleDateString('en-GB', options)
}

async function updateWeatherInfo(city) {
    const weatherData = await getfetchData('weather', city)

    if (weatherData.cod != 200) {
        showDisplaySection(notFoundSection)
        return
    }

    const {
        name: country,
        main: { temp, humidity },
        weather: [{ id, main }],
        wind: { speed }
    } = weatherData

    countryTxt.textContent = country
    tempTxt.textContent = Math.round(temp) + ' °C'
    conditionTxt.textContent = main
    humidityValueTxt.textContent = humidity + '%'
    windValueTxt.textContent = speed + ' M/s'
    weatherSummaryImg.src = `images/weather/${getWeatherIcon(id)}`
    currentDataTxt.textContent = getCurrentData()

    showDisplaySection(weatherinfoSection)
    updateForecastsInfo(city)
}

async function updateForecastsInfo(city) {
    const forecastsData = await getfetchData('forecast', city)
    const timeTaken = '12:00:00'
    const todayDate = new Date().toISOString().split('T')[0]

    forecastItemsContainer.innerHTML = ''
    forecastsData.list.forEach(forecastWeather => {
        if (forecastWeather.dt_txt.includes(timeTaken) &&
            !forecastWeather.dt_txt.includes(todayDate)) {
            updateForecastsItems(forecastWeather)
        }
    })
}

function updateForecastsItems(weatherData) {
    const {
        dt_txt: date,
        weather: [{ id }],
        main: { temp }
    } = weatherData

    const dataTaken = new Date(date)
    const dataOption = {
        day : '2-digit',
        month : 'short'
    }
    const dateResult = dataTaken.toLocaleDateString('en-US', dataOption)

    const forecastItem = `
    <div class="forecast-item">
        <h5 class="forecast-item-date regular-txt">${dateResult}</h5>
        <img src="images/weather/${getWeatherIcon(id)}" class="forecast-item-img">
        <h5 class="forecast-item-temp">${Math.round(temp)} °C</h5>
    </div>
    `
    forecastItemsContainer.insertAdjacentHTML('beforeend', forecastItem)
}

function showDisplaySection(section) {
    [weatherinfoSection, searcCitySection, notFoundSection]
        .forEach(section => section.style.display = 'none')

    section.style.display = 'flex'
}

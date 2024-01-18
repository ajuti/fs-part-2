import axios from "axios"
import { useState, useEffect } from "react"

const WeatherData = ({country}) => {
  const [weatherData, setWeatherData] = useState(null)
  const [lat, lon] = country.capitalInfo.latlng

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)
      .then(response => {
        setWeatherData(response.data)
      })
      .catch(error => {
        console.log("couldn't find data", error)
      })
  }, [])

  const api_key = import.meta.env.VITE_API_KEY

  if (!weatherData) {
    return null
  }

  console.log("found data", weatherData)

  return (
    <>
      <h2>Weather in {country.capital[0]}</h2>
      <div>
        temperature {weatherData.main.temp} celcius
      </div>
      <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
      <div>
        wind {weatherData.wind.speed} m/s
      </div>
    </>
  )
}

export default WeatherData
import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherResults from "./WeatherResults";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [unit, setUnit] = useState("celsius");
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleUnit(unit) {
    setUnit(unit);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
    });
    console.log(weatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWeather();
  }

  function handleCity(event) {
    setWeatherData({ city: event.target.value, ready: false });
  }

  function searchWeather() {
    const apiKey = "f4ff5751e00t63c15a8eb8eo1612abfe";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${weatherData.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>Weather Forecast</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <WeatherResults
          data={weatherData}
          unit={unit}
          unitCallback={handleUnit}
        />
        <WeatherForecast data={weatherData} unit={unit} />
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <h1>Weather Forecast</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </div>
    );
  }
}

import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherResults from "./WeatherResults";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "f4ff5751e00t63c15a8eb8eo1612abfe";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    const apiKey = "f4ff5751e00t63c15a8eb8eo1612abfe";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log({ apiUrl });
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="Weather">
        <h1>Weather Forecast</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoComplete="off"
            onChange={handleCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <WeatherResults data={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <div className="Weather">
        <h1>Weather Forecast</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoComplete="off"
            onChange={handleCity}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </div>
    );
  }
}

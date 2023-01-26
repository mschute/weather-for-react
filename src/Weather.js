import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import CurrentDate from "./CurrentDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    const apiKey = "f4ff5751e00t63c15a8eb8eo1612abfe";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="Weather">
        <h1>Weather Forecast</h1>
        <form>
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoComplete="off"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <div class="row current-stats">
          <div class="col-1 icon">
            <img
              src={weatherData.iconUrl}
              alt="weather icon"
              className="current-icon"
            />
          </div>
          <ul className="col-6 current-weather">
            <li className="current-temp">
              {Math.round(weatherData.temperature)}
              <sup className="temperature-scales">
                <div className="celsius">
                  <a href className="celsius-link active">
                    {" "}
                    °C{" "}
                  </a>
                </div>
                |
                <div className="fahrenheit">
                  <a href className="fahrenheit-link">
                    {" "}
                    °F
                  </a>
                </div>
              </sup>
            </li>
            <li className="hum-wind">
              Humidity <span className="humidity">{weatherData.humidity}</span>%
              <br />
              Wind <span className="wind">{weatherData.wind}</span>{" "}
              <span className="speed">kph</span>
            </li>
          </ul>
          <ul className="col-5 location">
            <li className="current-city">{props.city}</li>
            <li className="day-time">
              <CurrentDate date={weatherData.date} />
            </li>
            <li className="current-weather-desc">{weatherData.description}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    const apiKey = "f4ff5751e00t63c15a8eb8eo1612abfe";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

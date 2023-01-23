import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import currentWeatherDashIcon from "./currentWeatherDashIcon.png";

export default function Weather() {
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
            src={currentWeatherDashIcon}
            alt="weather icon"
            className="current-icon"
          />
        </div>
        <ul className="col-6 current-weather">
          <li className="current-temp">
            –
            <sup className="temperature-scales">
              <div className="celsius">
                <a className="celsius-link active"> °C </a>
              </div>
              |
              <div className="fahrenheit">
                <a className="fahrenheit-link"> °F</a>
              </div>
            </sup>
          </li>
          <li className="hum-wind">
            Humidity <span className="humidity">– </span>%
            <br />
            Wind <span className="wind">–</span>{" "}
            <span className="speed">kph</span>
          </li>
        </ul>
        <ul className="col-5 location">
          <li className="current-city">Location</li>
          <li className="day-time">Day Time</li>
          <li ClassName="current-weather-desc">–</li>
        </ul>
      </div>
    </div>
  );
}

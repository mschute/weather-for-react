import React from "react";
import CurrentDate from "./CurrentDate";

export default function WeatherResults(props) {
  return (
    <div className="WeatherResults">
      <div className="row current-stats">
        <div className="col-1 icon">
          <img
            src={props.data.iconUrl}
            alt="weather icon"
            className="current-icon"
          />
        </div>
        <ul className="col-6 current-weather">
          <li className="current-temp">
            {Math.round(props.data.temperature)}
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
            Humidity <span className="humidity">{props.data.humidity}</span>%
            <br />
            Wind <span className="wind">{props.data.wind}</span>{" "}
            <span className="speed">kph</span>
          </li>
        </ul>
        <ul className="col-5 location">
          <li className="current-city">{props.data.city}</li>
          <li className="day-time">
            <CurrentDate date={props.data.date} />
          </li>
          <li className="current-weather-desc">{props.data.description}</li>
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function convertMaxFahrenheit() {
    return Math.round((props.data.temperature.maximum * 9) / 5 + 32);
  }

  function convertMinFahrenheit() {
    return Math.round((props.data.temperature.minimum * 9) / 5 + 32);
  }

  if (props.units === "celsius") {
    return (
      <div>
        <div className="forecast-day">{day()}</div>
        <img
          src={props.data.condition.icon_url}
          alt="forecast weather icon"
          className="forecast-icon"
        />
        <div className="forecast-temperatures">
          <span className="forecast-high">
            {Math.round(props.data.temperature.maximum)}°
          </span>{" "}
          /{" "}
          <span className="forecast-low">
            {Math.round(props.data.temperature.minimum)}°
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="forecast-day">{day()}</div>
        <img
          src={props.data.condition.icon_url}
          alt="forecast weather icon"
          className="forecast-icon"
        />
        <div className="forecast-temperatures">
          <span className="forecast-high">
            {convertMaxFahrenheit(props.data.temperature.maximum)}°
          </span>{" "}
          /{" "}
          <span className="forecast-low">
            {convertMinFahrenheit(props.data.temperature.minimum)}°
          </span>
        </div>
      </div>
    );
  }
}

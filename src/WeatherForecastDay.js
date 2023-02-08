import React, { useState } from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  const [unit] = useState(props.unit);

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function getTemp(temp) {
    if (unit === "fahrenheit") {
      return Math.round((temp * 9) / 5 + 32);
    }

    return Math.round(temp);
  }

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
          {getTemp(props.data.temperature.maximum)}°
        </span>{" "}
        /{" "}
        <span className="forecast-low">
          {getTemp(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [unit] = useState(props.unit);
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState("");

  useEffect(() => {
    setReady(false);
  }, [props.unit]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="forecast-container">
        <div className="row">
          {forecast.map(function (forecastDays, index) {
            if (index < 5) {
              let evenOddClass = index % 2 === 0 ? "even" : "odd";
              return (
                <div
                  className={`col day-container ${evenOddClass}`}
                  key={index}
                >
                  <WeatherForecastDay data={forecastDays} unit={props.unit} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "f4ff5751e00t63c15a8eb8eo1612abfe";
    let units = "metric";
    let lon = props.data.coordinates.longitude;
    let lat = props.data.coordinates.latitude;
    let geoApiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=${units}`;
    axios.get(geoApiUrl).then(handleResponse);
  }
}

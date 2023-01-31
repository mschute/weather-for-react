import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState("");

  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="forecast-container">
        <div className="row">
          <div className="col day-container">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "f4ff5751e00t63c15a8eb8eo1612abfe";
    let units = "metric";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let geoApiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=${units}`;
    axios.get(geoApiUrl).then(handleResponse);
  }
}

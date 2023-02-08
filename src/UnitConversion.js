import React, { useState } from "react";
import "./UnitConversion.css";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState(props.unit);

  function showCelsius(event) {
    event.preventDefault();
    setUnit("fahrenheit");
    props.unitCallback("fahrenheit");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("celsius");
    props.unitCallback("celsius");
  }

  function convertFahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  function convertMiles() {
    return Math.round(props.wind / 1.609);
  }

  if (unit === "celsius") {
    return (
      <div>
        <li>
          {Math.round(props.celsius)}
          <sup className="temperature-scales">
            <div className="celsius-label"> °C </div>|
            <div className="fahrenheit-label">
              <a
                href
                className="fahrenheit-link inactive"
                onClick={showCelsius}
              >
                {" "}
                °F
              </a>
            </div>
          </sup>
        </li>
        <li className="humidity">Humidity {props.humidity}%</li>
        <li className="wind">Wind {Math.round(props.wind)} kph</li>
      </div>
    );
  } else {
    return (
      <div>
        <li>
          {convertFahrenheit()}
          <sup className="temperature-scales">
            <div className="celsius-label">
              <a
                href
                className="celsius-link inactive"
                onClick={showFahrenheit}
              >
                {" "}
                °C{" "}
              </a>
            </div>
            |<div className="fahrenheit-label"> °F</div>
          </sup>
        </li>
        <li className="humidity">Humidity {props.humidity}%</li>
        <li className="wind">Wind {convertMiles()} mph</li>
      </div>
    );
  }
}

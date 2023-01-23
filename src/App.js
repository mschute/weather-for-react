import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function App() {
  // const [city, setCity] = useState("");
  // const [temperature, setTemperature] = useState("");
  // const [description, setDescription] = useState("");
  // const [humidity, setHumidity] = useState("");
  // const [wind, setWind] = useState("");
  // const [icon, setIcon] = useState("");
  // const [loaded, setLoaded] = useState(false);

  // let form = (
  //   <form onSubmit={handleQuery}>
  //     <input
  //       type="search"
  //       placeholder="Enter a city..."
  //       autoFocus={true}
  //       onChange={updateCity}
  //     ></input>
  //     <input type="submit" value="Search"></input>
  //   </form>
  // );

  // function handleQuery(event) {
  //   event.preventDefault();
  //   let unit = "metric";
  //   let apiKey = "27cc38c68db54a86823a86663308e49a";
  //   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  //   axios.get(url).then(showWeather);
  // }

  // function updateCity(event) {
  //   setCity(event.target.value);
  // }

  // function showWeather(response) {
  //   setLoaded(true);
  //   setTemperature(response.data.main.temp);
  //   setDescription(response.data.weather[0].description);
  //   setHumidity(response.data.main.humidity);
  //   setWind(response.data.wind.speed);
  //   setIcon(
  //     `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  //   );
  // }

  // if (loaded) {
  return (
    <div className="App">
      <div class="container-sm text-center">
        <Weather />
        {/* {form}
          <ul>
            <li>City: {city}</li>
            <li>Temperature: {Math.round(temperature)}°C</li>
            <li>Description: {description}</li>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {wind} km/h</li>
            <li>
              <img src={icon} alt={description} />
            </li>
          </ul> */}
      </div>
      <div className="footer-link">
        <a href="https://github.com/mschute/weather-for-react">
          Open-source coded
        </a>
        , by Marta Unterschute
      </div>
    </div>
  );
  // } else {
  //   return (
  //     <div className="App">
  //       <div class="container-sm text-center">
  //         <Weather />
  //         {/* {form} */}
  //         <p>
  //           <a
  //             href="https://github.com/mschute/weather-for-react"
  //             target="_blank"
  //             rel="noreferrer"
  //           >
  //             Open-source coded
  //           </a>
  //           , by Marta Unterschute
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }
}

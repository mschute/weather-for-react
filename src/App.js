import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

export default function App(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }

  let apiKey = "27cc38c68db54a86823a86663308e49a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return <h1>Weather App</h1>;
}

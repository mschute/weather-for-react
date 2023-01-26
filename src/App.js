import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container-sm text-center">
        <Weather defaultCity="London" />
      </div>
      <div className="footer-link">
        <a href="https://github.com/mschute/weather-for-react">
          Open-source coded
        </a>
        , by Marta Unterschute
      </div>
    </div>
  );
}

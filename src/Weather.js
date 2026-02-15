import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import CurrentButton from "./Current";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleCurrentLocation(coordinates) {
    const apiKey = "224f23t3b08b6cab3df63781o3c48aaf";
    let longitude = coordinates.longitude;
    let latitude = coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function searchCity(cityName) {
    const apiKey = "224f23t3b08b6cab3df63781o3c48aaf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function search() {
    const apiKey = "224f23t3b08b6cab3df63781o3c48aaf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchLisbon(event) {
    event.preventDefault();
    searchCity("Lisbon");
  }
  function searchParis(event) {
    event.preventDefault();
    searchCity("Paris");
  }
  function searchTokyo(event) {
    event.preventDefault();
    searchCity("Tokyo");
  }
  function searchChisinau(event) {
    event.preventDefault();
    searchCity("Chisinau");
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="search-links mb-3 d-flex justify-content-left grid gap-3">
          <a href="/" onClick={searchLisbon}>
            Lisbon
          </a>
          <a href="/" onClick={searchParis}>
            Paris
          </a>
          <a href="/" onClick={searchTokyo}>
            Tokyo
          </a>
          <a href="/" onClick={searchChisinau}>
            Chisinau
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3 d-flex justify-content-left grid gap-3 ">
              <input type="submit" value="Search" className="btn btn-primary" />{" "}
              <CurrentButton onCurrentLocation={handleCurrentLocation} />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

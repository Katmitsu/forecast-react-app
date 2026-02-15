import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "f5029b784306910c19746e40c14d6cd3";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="cloudy" size={30} />
          <div className="WeatherForecast-temperatures">
            {" "}
            <span className="WeatherForecast-high">19</span>{" "}
            <span className="WeatherForecast-low">10</span>º
          </div>
        </div>
      </div>
    </div>
  );
}

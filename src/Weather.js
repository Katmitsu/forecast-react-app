import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="text" placeholder="Enter a city..." />
          </div>
          <div className="col-3">
            <button type="submit" value="Current" className="btn btn-secondary">
              Current
            </button>
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Monday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          />
          6ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 80%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

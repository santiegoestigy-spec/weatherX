import React from "react";
import PropTypes from "prop-types";
import "../styles/WeatherCard.css";

export default function WeatherCard({ data }) {
  if (!data) return null;

  return (
    <div className="weather-card container">
      <h3>{data.name}</h3>
      <p>{data.weather[0].description}</p>
      <h2>{Math.round(data.main.temp)}°C</h2>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {data.wind.speed} m/s</p>
    </div>
  );
}

WeatherCard.propTypes = {
  data: PropTypes.object,
};

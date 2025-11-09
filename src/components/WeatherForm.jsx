import React, { useState } from "react";
import "../styles/WeatherForm.css";

export default function WeatherForm({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

  return (
    <section className="weather-form container" id="forecast">
      <h2>Search Weather</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit">Get Forecast</button>
      </form>
    </section>
  );
}

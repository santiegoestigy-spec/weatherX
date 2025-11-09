import React from "react";
import "../styles/Hero.css";
import pic1 from "../assets/images/pic1.webp";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Stay Ahead of the Weather</h1>
          <p>
            WeatherX helps you plan your day with real-time weather updates,
            smart forecasts, and beautiful visual insights.
          </p>
          <button className="cta-btn">Check Forecast</button>
        </div>
        <div className="hero-img">
          <img src={pic1} alt="weather forecast illustration" />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "../styles/Features.css";
import pic2 from "../assets/images/pic2.webp";
import pic3 from "../assets/images/pic3.webp";
import pic4 from "../assets/images/pic4.webp";
import pic6 from "../assets/images/pic6.webp";
export default function Features() {
  const features = [
    {
      img: pic2,
      title: "Accurate Forecasts",
      text: "Powered by OpenWeather API for real-time updates you can trust.",
    },
    {
      img: pic3,
      title: "Smart Alerts",
      text: "Get notified when severe weather is approaching your area.",
    },
    {
      img: pic6,
      title: "Global Coverage",
      text: "Check weather for any city in the world instantly.",
    },
  ];

  return (
    <section id="features" className="features container">
      <h2>Why Choose WeatherX?</h2>
      <div className="feature-grid">
        {features.map((f, index) => (
          <div key={index} className="feature-card">
            <img src={f.img} alt={f.title} />
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

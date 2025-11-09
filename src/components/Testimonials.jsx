import React from "react";
import "../styles/Testimonials.css";
import pic4 from "../assets/images/pic4.webp";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Users Say</h2>
        <div className="testimonial-box">
          <img src={pic4} alt="user" />
          <p>
            “WeatherX is my go-to app every morning. Clean design, fast results,
            and it’s always accurate!”
          </p>
          <h4>- Alex Johnson</h4>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "../styles/Footer.css";
import pic5 from "../assets/images/pic5.webp";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <h3>Stay Connected</h3>
          <p>Get weather updates directly to your inbox.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="footer-right">
          <img src={pic5} alt="lamp" />
        </div>
      </div>
      <p className="copyright">© 2025 WeatherX. All rights reserved.</p>
    </footer>
  );
}

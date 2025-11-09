import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container nav-container">
        <h1 className="logo">Weather<span>X</span></h1>
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#forecast">Forecast</a></li>
            <li><a href="#testimonials">Stories</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

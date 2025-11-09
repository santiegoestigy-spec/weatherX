import React from "react";
import "./styles/global.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { useWeather } from "./hooks/useWeather";

function App() {
  const { data, getWeather } = useWeather();

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <WeatherForm onSearch={getWeather} />
      <WeatherCard data={data} />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";

export const useWeather = () => {
  const [data, setData] = useState(null);

  const getWeather = async (city) => {
    try {
      const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  return { data, getWeather };
};

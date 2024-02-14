import axios from "axios";
import { useState, useEffect } from "react";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}=Thailand`,
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Error fetching data");
      }
    }

    fetchWeatherData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-row justify-center items-center w-full gap-2">
    <div className="flex items-start flex-col gap-4">
      <p className="font-bold text-[20px] ">Weather in Thailand</p>
      <div className="flex items-center">
        <p className="text-gray-400">
          Weather Now: {weatherData.current.condition.text}
        </p>
        <img
          src={`${weatherData.current.condition.icon}`}
          className="w-[50px]"
        />
      </div>
      <p className="text-gray-400">Cloud: {weatherData.current.cloud}</p>
      <p className="text-gray-400">
        Wind Direction: {weatherData.current.wind_dir}
      </p>
      <p className="text-gray-400">UV: {weatherData.current.uv}</p>
    </div>
    </div>
  );
}

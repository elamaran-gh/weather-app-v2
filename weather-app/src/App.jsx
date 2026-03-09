import React, { useState } from "react";
import Button from "./Button.jsx";
import WeatherCard from "./WeatherCard.jsx";
import { getWeather } from "./services/weatherApi";
import foresty from "./assets/foresty.jpg";

function App() {

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const loadWeather = async () => {
    if (!city) return;

    try {
      const data = await getWeather(city);
      setWeatherData(data);
    } catch (error) {
      console.error("Weather fetch error:", error);
    }
  };

  return (
  <div className="weather-app text-white">
    <div
      className="flex items-center justify-center min-h-screen px-4"
      style={{
        backgroundImage: `url(${foresty})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      <div className="backdrop-blur-md bg-white/30 p-6 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-2xl font-bold text-center mb-6">
          Weather App
        </h1>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">

          <input
            className="border-2 border-white rounded-md p-2 flex-1 text-black"
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <Button
            onClick={loadWeather}
            text="Search"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          />

        </div>

        {/* Weather Info */}
        <div className="flex justify-center text-center">
          {weatherData ? (
            <WeatherCard weatherData={weatherData} />
          ) : (
            <p>Search a city to see weather</p>
          )}
        </div>

      </div>

    </div>
  </div>
);
}

export default App;
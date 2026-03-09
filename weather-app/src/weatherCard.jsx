import React from 'react'

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return <p>Loading...</p>
  return (
    <div className="weather-card border-2 border-white rounded-lg shadow-lg p-4 ">
      <h2 className="text-xl font-bold">
        Weather Information
        </h2>
      <div className="cursor-pointer rounded-md p-2">

        <p className="mt-4 text-md hover:text-black">
          Temperature:{weatherData?.main?.temp}°C
        </p>

        <p className="mt-4 text-md hover:text-black">
          Weather:{weatherData?.weather[0]?.description}
        </p>

        <p className="mt-4 text-md hover:text-black">
          Humidity: {weatherData.main.humidity}%
        </p>
        
      </div>

    </div>
  );
};

export default WeatherCard;
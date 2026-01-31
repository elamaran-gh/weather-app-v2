import React from 'react'

const weatherCard = () => {
  return (
    <div className="weather-card bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold">Weather Information</h2>
      <p>Temperature: 25°C</p>
      <p>Description: Sunny</p>
    </div>
  )
}

export default weatherCard
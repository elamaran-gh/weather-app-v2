import React from 'react'
import Button from './Button.jsx'

function App() {


  return (

    <div className="app mt-50 w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="container text-center my-4">
         <h1>Weather App</h1>
      </div>
      <div className="flex justify-center items-center gap-4">
          <input className="border-black border-2 rounded-md p-2 w-full max-w-xs" type="text" placeholder="Enter city name"></input>
           <Button />
        </div>

    </div>
  )
}

export default App

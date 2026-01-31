

export const weatherApi = () => {
   const API_KEY = "20cac3601541674545647981e96c3105"

   const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_KEY}`
      )
      if (!response.ok){
        throw new Error ("Failed to fetch weather data")
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
   }
}


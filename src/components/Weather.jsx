import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get(
      "https://api.openweathermap.org/data/2.5/weather?id=5969185&appid=c5972ab4a273ed8abdcabb24acd64a85"
    ).then(function (response) {
      setWeather(Math.round(response.data.main.temp - 273.15));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }, []);

  return(
    // Add spinner while waiting for API response
    <div className="weather-summary">
      Today it is: {weather} Degrees Celsius
    </div>
  )
}

export default Weather;

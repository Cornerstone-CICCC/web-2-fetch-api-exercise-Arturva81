const temperature = document.querySelector('.temperature');
const windSpeed = document.querySelector('.wind-speed');
const placeCity = document.querySelector('.place-city');
const lastUpdated = document.querySelector('.last-updated');

const fetchWeather = () => {
  fetch('https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      temperature.textContent = `${data.current.temperature_2m}${data.current_units.temperature_2m}`;
      
      windSpeed.textContent = `Wind Speed: ${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`;
      
      placeCity.textContent = data.timezone;
      
      const date = new Date(data.current.time);
      lastUpdated.textContent = `Last Updated: ${date.toLocaleString()}`;
    })
    .catch(error => {
      console.error('Error fetching weather:', error);
      temperature.textContent = 'Weather info not available';
    });
}

fetchWeather();

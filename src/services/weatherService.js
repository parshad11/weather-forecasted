import axios from 'axios';

const apiKey = 'da885eccc991ef1ac199017cf6aa8f3a';

export const getWeatherData = async (city  ,  unit) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

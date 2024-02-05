<template>
  <div>
    <h2>Weather Forecast </h2>

    <div class="mb-3">
      <label for="citySelect" class="form-label">Select City:</label>
      <select id="citySelect" v-model="selectedCity" class="form-select">
        <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="unitSelect" class="form-label">Select Unit:</label>
      <select id="unitSelect" v-model="selectedUnit" class="form-select">
        <option value="metric">Celsius</option>
        <option value="imperial">Fahrenheit</option>
        <option value="standard">Kelvin</option>
      </select>
    </div>

    <button @click="fetchWeatherData" class="btn btn-primary mb-3">Fetch Weather</button>

    <div v-if="weatherData">
      <table class="table">
        <tbody>
          <tr>
            <td>Location:</td>
            <td>{{ weatherData.name }}, {{ weatherData.sys.country }}</td>
          </tr>
          <tr>
            <td>Temperature:</td>
            <td>{{ weatherData.main.temp }}</td>
          </tr>
          <tr>
            <td>Feels Like:</td>
            <td>{{ weatherData.main.feels_like }}</td>
          </tr>
          <tr>
            <td>Min Temperature:</td>
            <td>{{ weatherData.main.temp_min }}</td>
          </tr>
          <tr>
            <td>Max Temperature:</td>
            <td>{{ weatherData.main.temp_max }}</td>
          </tr>
          <tr>
            <td>Pressure:</td>
            <td>{{ weatherData.main.pressure }} hPa</td>
          </tr>
          <tr>
            <td>Humidity:</td>
            <td>{{ weatherData.main.humidity }}%</td>
          </tr>
          <tr>
            <td>Visibility:</td>
            <td>{{ weatherData.visibility }} meters</td>
          </tr>
          <tr>
            <td>Wind Speed:</td>
            <td>{{ weatherData.wind.speed }} m/s</td>
          </tr>
          <tr>
            <td>Wind Direction:</td>
            <td>{{ weatherData.wind.deg }}°</td>
          </tr>
          <tr>
            <td>Cloudiness:</td>
            <td>{{ weatherData.clouds.all }}%</td>
          </tr>
          <tr>
            <td>Sunrise:</td>
            <td>{{ new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString() }}</td>
          </tr>
          <tr>
            <td>Sunset:</td>
            <td>{{ new Date(weatherData.sys.sunset * 1000).toLocaleTimeString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    weatherData: Object,
  },
  data() {
    return {
      cities: ['Kathmandu', 'New York', 'London', 'Tokyo'],
      selectedCity: 'Kathmandu',
      selectedUnit: 'metric',
    };
  },
  methods: {
    fetchWeatherData() {
      this.$emit('fetch-weather', {
        city: this.selectedCity,
        unit: this.selectedUnit,
      });
    }
  },
};
</script>

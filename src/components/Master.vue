<template>
  <div class="container mt-2">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <WeatherLogo />
          </div>
          <div class="card-body">
            <div v-if="Object.keys(getLoginUser).length === 0">
              <template v-if="showLogin">
                <LoginForm @loggedIn="loggedIn" />
                <p class="mt-3">No account yet? <span @click="showLogin=false" class="text-primary"><a style="cursor: pointer;">Sign up</a></span> instead.</p>
              </template>
              <template v-else>
                <SignupForm @signuped="signuped" />
                <p class="mt-3">Already registered? <span @click="showLogin=true" class="text-primary"><a style="cursor: pointer;">Login</a></span> instead.</p>
              </template>
            </div>
            <div v-else>
              <WeatherComponent
                :weatherData="weatherData"
                @fetch-weather="fetchWeatherData"
                @load-previous-date="loadPreviousDate"
                @load-next-date="loadNextDate"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherLogo from '@/components/WeatherLogo.vue';
import WeatherComponent from '@/components/WeatherComponent.vue';
import SignupForm from './SignupForm.vue';
import LoginForm from './LoginForm.vue';
import { getWeatherData } from '@/services/weatherService';

export default {
  name: 'MasterComponent',
  components: {
    WeatherLogo,
    WeatherComponent,
    SignupForm,
    LoginForm,
  },
  data() {
    return {
      weatherData: null,
      showLogin: true,
      selectedDate: new Date(),
    };
  },
  async mounted() {
    await this.fetchWeatherData();
  },
  computed: {
    getLoginUser() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    async fetchWeatherData({ city, unit } = {}) {
      try {
        const data = await getWeatherData(city || 'Kathmandu', unit || 'metric');
        this.weatherData = data;
      } catch (error) {
        console.error('Error in fetching data:', error);
      }
    },
    signuped() {
      this.showLogin = true;
    },
  },
};
</script>

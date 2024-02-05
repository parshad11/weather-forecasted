// tests/unit/WeatherComponent.spec.js
const { expect } = require('chai');
const { shallowMount } = require('@vue/test-utils');
const WeatherComponent = require('../../src/components/WeatherComponent.vue');

describe('WeatherComponent.vue', () => {
  it('renders weather data correctly when weatherData prop is provided', async () => {
    // Mock weather data
    const mockWeatherData = {
      name: 'Mock City',
      sys: { country: 'MC' },
      main: {
        temp: 20,
        feels_like: 18,
        temp_min: 18,
        temp_max: 22,
        pressure: 1010,
        humidity: 50,
      },
      visibility: 10000,
      wind: { speed: 5, deg: 180 },
      clouds: { all: 20 },
      sys: {
        sunrise: 1619824420,
        sunset: 1619870400,
      },
    };

    // Mount the WeatherComponent with mock data
    const wrapper = shallowMount(WeatherComponent, {
      propsData: { weatherData: mockWeatherData },
    });

    // Wait for Vue to update the DOM
    await wrapper.vm.$nextTick();

    // Assertions
    expect(wrapper.text()).to.include('Location: Mock City, MC');
    expect(wrapper.text()).to.include('Temperature: 20');
    expect(wrapper.text()).to.include('Feels Like: 18');
    // Add more assertions based on your component's content

    // Destroy the component to avoid side effects on other tests
    wrapper.destroy();
  });

  it('emits fetch-weather event when fetchWeatherData method is called', async () => {
    // Mock the fetch-weather event
    const fetchWeatherStub = sinon.stub();

    // Mount the WeatherComponent
    const wrapper = shallowMount(WeatherComponent, {
      propsData: { weatherData: null },
      listeners: {
        'fetch-weather': fetchWeatherStub,
      },
    });

    // Call the fetchWeatherData method
    await wrapper.vm.fetchWeatherData();

    // Assertions
    expect(fetchWeatherStub.calledOnce).to.be.true;

    // Destroy the component to avoid side effects on other tests
    wrapper.destroy();
  });

  // Add more tests based on your component's methods and behavior
});

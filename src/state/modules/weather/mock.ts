import { weather } from 'services/weather/mock';
import { WeatherState } from './reducer';

const state: WeatherState = {
  fetchWeather: {
    isFetching: false,
  },
  weather,
};

export default state;

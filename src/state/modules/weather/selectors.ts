import { StoreState } from 'state/root-reducer';
import { Weather } from './types';

export const getWeather = (state: StoreState): Weather[] =>
  state.weather.weather;

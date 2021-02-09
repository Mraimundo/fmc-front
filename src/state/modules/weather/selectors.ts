import { StoreState } from 'state/root-reducer';
import { Weather } from './types';

export const getWeather = (state: StoreState): Weather | null =>
  state.weather.weather;

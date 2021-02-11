import {
  ActionCreatorFailure,
  ActionCreatorPayload,
  ActionCreator,
} from '@types';
import * as actions from './constants';
import { WeatherState } from './reducer';
import * as types from './types';

export const clearWeather = (): ActionCreator<typeof actions.CLEAR_WEATHER> =>
  <const>{
    type: actions.CLEAR_WEATHER,
  };

export const fetchWeather = (
  cityCoordinates: types.CityCoordinates,
): ActionCreatorPayload<
  typeof actions.FETCH_WEATHER_ACTION,
  types.CityCoordinates
> =>
  <const>{
    type: actions.FETCH_WEATHER_ACTION,
    payload: cityCoordinates,
  };

export const fetchWeatherFailure = (
  error: string,
): ActionCreatorFailure<typeof actions.FETCH_WEATHER_FAILURE> =>
  <const>{
    type: actions.FETCH_WEATHER_FAILURE,
    payload: {
      error,
    },
  };

export const fetchWeatherSuccess = (
  weather: types.Weather | null,
): ActionCreatorPayload<
  typeof actions.FETCH_WEATHER_SUCCESS,
  Pick<WeatherState, 'weather'>
> =>
  <const>{
    type: actions.FETCH_WEATHER_SUCCESS,
    payload: { weather },
  };

export type WeatherActions = ReturnType<
  | typeof fetchWeather
  | typeof fetchWeatherFailure
  | typeof fetchWeatherSuccess
  | typeof clearWeather
>;

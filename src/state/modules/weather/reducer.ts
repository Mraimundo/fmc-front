import { Reducer } from 'redux';

import { FetchState } from '@types';
import { emptyFetchState, fetchingState, fetchErrorState } from 'state/utils';
import { WeatherActions } from './actions';
import * as actions from './constants';
import { Weather } from './types';

export interface WeatherState {
  fetchWeather: FetchState;
  weather: Weather | null;
}

export const initialState: WeatherState = {
  fetchWeather: emptyFetchState,
  weather: null,
};

const weatherReducer: Reducer<WeatherState, WeatherActions> = (
  state = initialState,
  action: WeatherActions,
): WeatherState => {
  switch (action.type) {
    case actions.FETCH_WEATHER_ACTION:
      return { ...state, fetchWeather: fetchingState };
    case actions.FETCH_WEATHER_FAILURE:
      return { ...state, fetchWeather: fetchErrorState(action) };
    case actions.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        fetchWeather: emptyFetchState,
        weather: action.payload.weather,
      };
    case actions.CLEAR_WEATHER:
      return initialState;

    default:
      return state;
  }
};

export default weatherReducer;

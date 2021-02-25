import { all, takeEvery, call, put } from 'redux-saga/effects';
import { ActionCreatorPayload } from '@types';

import { handlerErrors } from 'util/handler-errors';
import { getWeatherByCityCoordinates } from 'services/weather';
import * as actions from './actions';
import * as constants from './constants';
import { Weather, CityCoordinates } from './types';

export function* workerFetchWeather({
  payload,
}: ActionCreatorPayload<
  typeof constants.FETCH_WEATHER_ACTION,
  CityCoordinates[]
>) {
  try {
    const citiesWeather: Weather[] = [];

    if (payload[0]) {
      const weather: Weather | null = yield call(
        getWeatherByCityCoordinates,
        payload[0],
      );
      if (weather) citiesWeather.push(weather);
    }

    if (payload[1]) {
      const weather: Weather | null = yield call(
        getWeatherByCityCoordinates,
        payload[1],
      );
      if (weather) citiesWeather.push(weather);
    }

    if (citiesWeather.length === 0)
      throw new Error('Falha ao buscar a previsão do tempo');

    yield put(actions.fetchWeatherSuccess(citiesWeather));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchWeatherFailure);
  }
}

export default function* headerSagas() {
  yield all([takeEvery(constants.FETCH_WEATHER_ACTION, workerFetchWeather)]);
}

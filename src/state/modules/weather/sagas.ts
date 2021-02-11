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
  CityCoordinates
>) {
  try {
    const result: Weather | null = yield call(
      getWeatherByCityCoordinates,
      payload,
    );

    if (!result) throw new Error('Falha ao buscar a previsão do tempo');

    yield put(actions.fetchWeatherSuccess(result));
  } catch (error) {
    yield call(handlerErrors, error, actions.fetchWeatherFailure);
  }
}

export default function* headerSagas() {
  yield all([takeEvery(constants.FETCH_WEATHER_ACTION, workerFetchWeather)]);
}

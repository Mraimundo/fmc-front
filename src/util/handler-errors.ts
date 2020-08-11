import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';

import { ActionCreatorFailureType } from '@types';

type TAxios = AxiosError<{
  message: string;
  url: string;
  code: number;
}>;

export function* handlerErrors(
  error: TAxios & Error,
  actionCreatorFailure: ActionCreatorFailureType,
) {
  if (error && error.stack && error.message && !error?.response) {
    yield put(actionCreatorFailure(error.message));
    return;
  }

  const errorMessage =
    error.response?.data.message || 'Ocorreu um erro inesperado';

  yield put(actionCreatorFailure(errorMessage));
}

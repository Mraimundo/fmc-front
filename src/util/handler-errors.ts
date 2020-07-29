import { AxiosError } from 'axios';
import { put } from 'redux-saga/effects';

import { ActionCreatorFailureType } from '@types';

export function* handlerErrors(
  error:
    | string
    | AxiosError<{
        message: string;
        url: string;
        code: number;
      }>,
  actionCreatorFailure: ActionCreatorFailureType,
) {
  if (typeof error === 'string') {
    yield put(actionCreatorFailure(error));
    return;
  }

  yield put(
    actionCreatorFailure(
      error.response?.data.message || 'Ocorreu um erro inesperado',
    ),
  );
}

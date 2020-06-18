import * as Sentry from '@sentry/browser';
import { put } from 'redux-saga/effects';

import { ApiErrors, ActionCreatorFailureType } from '@types';

export const captureException = (error: Error) =>
  Sentry.captureException(error);

export function* handlerErrors(
  error: Error | ApiErrors[],
  actionCreatorFailure: ActionCreatorFailureType,
) {
  if (error instanceof Error) {
    captureException(error);
    return;
  }

  yield put(actionCreatorFailure(error));
}

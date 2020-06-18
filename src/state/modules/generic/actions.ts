import {
  ActionCreator,
  ActionCreatorPayload,
  ActionCreatorFailure,
  ApiErrors,
} from '@types';
import {
  FETCH_ANYTHING_ACTION,
  FETCH_ANYTHING_FAILURE,
  FETCH_ANYTHING_SUCCESS,
} from './constants';
import { FetchAnythingData } from './types';

export const fetchAnythingAction = (): ActionCreator<
  typeof FETCH_ANYTHING_ACTION
> =>
  <const>{
    type: FETCH_ANYTHING_ACTION,
  };

export const fetchAnythingFailure = (
  errors: ApiErrors[],
): ActionCreatorFailure<typeof FETCH_ANYTHING_FAILURE> =>
  <const>{
    type: FETCH_ANYTHING_FAILURE,
    payload: {
      errors,
    },
  };

export const fetchAnythingSuccess = (
  data: FetchAnythingData,
): ActionCreatorPayload<typeof FETCH_ANYTHING_SUCCESS, FetchAnythingData> =>
  <const>{
    type: FETCH_ANYTHING_SUCCESS,
    payload: {
      name: data.name,
      email: data.email,
    },
  };

export type GenericActions = ReturnType<
  | typeof fetchAnythingAction
  | typeof fetchAnythingFailure
  | typeof fetchAnythingSuccess
>;

import { Reducer } from 'redux';

import { ApiErrors } from '@types';
import { GenericActions } from './actions';
import {
  FETCH_ANYTHING_ACTION,
  FETCH_ANYTHING_FAILURE,
  FETCH_ANYTHING_SUCCESS,
} from './constants';

export type GenericState = {
  isFetching: boolean;
  name: string;
  email: string;
  errors: ApiErrors[];
};

export const initialState: GenericState = {
  isFetching: false,
  name: '',
  email: '',
  errors: [],
};

const genericReducer: Reducer<GenericState> = (
  state = initialState,
  action: GenericActions,
): GenericState => {
  switch (action.type) {
    case FETCH_ANYTHING_ACTION:
      return { ...state, isFetching: true };
    case FETCH_ANYTHING_FAILURE:
      return { ...state, isFetching: false, errors: action.payload.errors };
    case FETCH_ANYTHING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        name: action.payload.name,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

export default genericReducer;

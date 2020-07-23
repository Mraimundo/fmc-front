import { Reducer } from 'redux';

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
  error: string;
};

export const initialState: GenericState = {
  isFetching: false,
  name: '',
  email: '',
  error: '',
};

const genericReducer: Reducer<GenericState> = (
  state = initialState,
  action: GenericActions,
): GenericState => {
  switch (action.type) {
    case FETCH_ANYTHING_ACTION:
      return { ...state, isFetching: true };
    case FETCH_ANYTHING_FAILURE:
      return { ...state, isFetching: false, error: action.payload.error };
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

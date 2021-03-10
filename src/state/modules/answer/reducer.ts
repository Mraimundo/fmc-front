import { Reducer } from 'redux';

import { AnswerActions } from './actions';
import {
  SET_VALUE_ANSWER,
} from './constants';

export interface AnswerState {
  value: string,
}

export const initialState: AnswerState = {
  value: "",
};

const answerReducer: Reducer<AnswerState, AnswerActions> = (
  state = initialState,
  action: AnswerActions,
): AnswerState => {
  switch (action.type) {
    case SET_VALUE_ANSWER:
      return { ...state, value: action.payload };

    default:
      return state;
  }
};

export default answerReducer;

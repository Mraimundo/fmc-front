
import {
  SET_VALUE_ANSWER,
} from './constants';


export const setValueAnswer = (text: string) => {
  return {
    type: SET_VALUE_ANSWER,
    payload: text,
  }

}

export type AnswerActions = ReturnType<
  | typeof setValueAnswer

>;



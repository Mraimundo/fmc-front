
import {
  SET_VALUE_ANSWERS,
} from './constants';


export const setValueAnswer = (payload: any) => {
  return {
    type: SET_VALUE_ANSWERS,
    payload: payload,
  }
}




export type AnswerActions = ReturnType<
  | typeof setValueAnswer

>;



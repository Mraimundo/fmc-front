import produce from 'immer'
import {
  SET_VALUE_ANSWERS,
} from './constants';

export const initialState = [

]

const answerReducer = ((state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_VALUE_ANSWERS: {

      return produce(state, (draft: { [x: string]: any; }) => {
        const answerIndex = state.findIndex((item: any) => item.answer_id === action.payload.answer_id)
        if (answerIndex !== -1) {
          draft[answerIndex] = action.payload
          return draft
        }
        draft.push(action.payload)
      })
    }
    default:
      return state
  }
});

export default answerReducer;

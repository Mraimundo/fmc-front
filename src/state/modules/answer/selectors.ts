import { StoreState } from 'state/root-reducer';

export const getValueAnswer = (state: StoreState): string =>
  state.answerReducer.value;

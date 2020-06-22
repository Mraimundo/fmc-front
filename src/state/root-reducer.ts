import { combineReducers } from 'redux';

import generic, { GenericState } from './modules/generic/reducer';

export type StoreState = {
  generic: GenericState;
};

export default combineReducers<StoreState>({
  generic,
});

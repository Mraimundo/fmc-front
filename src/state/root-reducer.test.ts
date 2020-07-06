import { expect } from 'chai';
import { createStore } from 'redux';

import rootReducer from './root-reducer';
import pointManagement from './modules/point-management/reducer';

describe('src/state/root-reducer', () => {
  const store = createStore(rootReducer);

  it('should return initial state', () => {
    expect(store.getState().pointManagement).to.be.deep.equal(
      pointManagement(undefined, { type: 'unknown' }),
    );
  });
});

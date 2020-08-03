import { expect } from 'chai';
import { createStore } from 'redux';

import rootReducer from './root-reducer';
import pointManagement from './modules/point-management/reducer';
import header from './modules/header/reducer';
import home from './modules/home/reducer';

describe('src/state/root-reducer', () => {
  const store = createStore(rootReducer);

  test('should return initial state', () => {
    expect(store.getState().pointManagement).to.be.deep.equal(
      pointManagement(undefined, { type: 'unknown' }),
    );

    expect(store.getState().header).to.be.deep.equal(
      header(undefined, { type: 'unknown' }),
    );

    expect(store.getState().home).to.be.deep.equal(
      home(undefined, { type: 'unknown' }),
    );
  });
});

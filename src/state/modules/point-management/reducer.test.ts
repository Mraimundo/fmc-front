import { expect } from 'chai';
import { createStore } from 'redux';

import reducer from './reducer';
import common from './common/reducer';
import resaleCooperative from './resale-cooperative/reducer';
import teamAwards from './team-awards/reducer';

describe('src/state/modules/point-management/reducer', () => {
  const store = createStore(reducer);

  test('should return initial state', () => {
    expect(store.getState().common).to.be.deep.equal(
      common(undefined, { type: 'unknown' }),
    );
    expect(store.getState().resaleCooperative).to.be.deep.equal(
      resaleCooperative(undefined, { type: 'unknown' }),
    );
    expect(store.getState().teamAwards).to.be.deep.equal(
      teamAwards(undefined, { type: 'unknown' }),
    );
  });
});

import { expect } from 'chai';

import state from 'state/modules/mock';
import { getTotalPointsTeamAwards } from './selectors';

describe('src/state/modules/point-management/common/selectors', () => {
  it('check getTotalPointsTeamAwards', () => {
    expect(getTotalPointsTeamAwards(state)).to.be.equal('5000');
  });
});

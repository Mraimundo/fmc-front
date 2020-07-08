import { expect } from 'chai';

import { toggleRoleSelection } from './utils';
import { selectedRoles } from './mock';

describe('src/state/modules/point-management/team-awards/utils', () => {
  describe('toggleRoleSelection', () => {
    it('should be a function', () => {
      expect(toggleRoleSelection).to.be.a('function');
    });

    it('should return an array', () => {
      expect(toggleRoleSelection(selectedRoles, 1)).to.be.an('array');
    });

    it(`toggleRoleSelection(selectedRoles, 3) should return [1, 2, 3]`, () => {
      expect(toggleRoleSelection(selectedRoles, 3)).to.be.deep.equal([
        ...selectedRoles,
        3,
      ]);
    });

    it(`toggleRoleSelection(selectedRoles, 1) should return [2]`, () => {
      expect(toggleRoleSelection(selectedRoles, 1)).to.be.deep.equal([2]);
    });
  });
});

import { expect } from 'chai';

import pointManagementMock from 'state/modules/point-management/mock';
import commonMock from 'state/modules/point-management/common/mock';
import state from 'state/modules/mock';
import {
  getSubsidiaries,
  getSelectedSubsidiaries,
  getSelectedSubsidiariesWithName,
  getRoles,
  getSelectedRoles,
  getParticipantFinder,
  getPointsToDistribute,
  getBalanceAvailable,
} from './selectors';
import teamAwardsMock, {
  subsidiaries,
  roles,
  selectedSubsidiaries,
  selectedRoles,
} from './mock';

describe('src/state/modules/point-management/team-awards/selectors', () => {
  it('check getSubsidiaries', () => {
    expect(getSubsidiaries(state)).to.be.equal(subsidiaries);
  });

  it('check getSelectedSubsidiaries', () => {
    expect(getSelectedSubsidiaries(state)).to.be.equal(selectedSubsidiaries);
  });

  it('check getSelectedSubsidiariesWithName', () => {
    expect(getSelectedSubsidiariesWithName(state)).to.be.deep.equal([
      { id: 1, label: 'Filial 1' },
      { id: 2, label: 'Filial 2' },
    ]);
  });

  it('check getRoles', () => {
    expect(getRoles(state)).to.be.equal(roles);
  });

  it('check getSelectedRoles', () => {
    expect(getSelectedRoles(state)).to.be.equal(selectedRoles);
  });

  it('check getParticipantFinder', () => {
    expect(getParticipantFinder(state)).to.be.equal(
      state.pointManagement.teamAwards.participantFinder,
    );
  });

  it('check getPointsToDistribute', () => {
    expect(getPointsToDistribute(state)).to.be.equal(
      state.pointManagement.teamAwards.pointsToDistribute,
    );
  });

  it('check getBalanceAvailable', () => {
    expect(getBalanceAvailable(state)).to.be.equal(0);
    expect(
      getBalanceAvailable({
        ...state,
        pointManagement: {
          ...pointManagementMock,
          teamAwards: {
            ...teamAwardsMock,
            pointsToDistribute: '2000',
          },
        },
      }),
    ).to.be.equal(3000);
    expect(
      getBalanceAvailable({
        ...state,
        pointManagement: {
          ...pointManagementMock,
          teamAwards: {
            ...teamAwardsMock,
            pointsToDistribute: '0',
          },
        },
      }),
    ).to.be.equal(5000);
    expect(
      getBalanceAvailable({
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            totalPointsTeamAwards: null,
          },
        },
      }),
    ).to.be.equal(0);
  });
});

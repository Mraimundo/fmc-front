import { expect } from 'chai';

import { StoreState } from 'state/root-reducer';
import pointManagementMock from 'state/modules/point-management/mock';
import commonMock from 'state/modules/point-management/common/mock';
import state from 'state/modules/mock';
import {
  getSubsidiaries,
  getSelectedSubsidiaries,
  getRoles,
  fetchRolesIsFetching,
  getSelectedRoles,
  getParticipantFinder,
  getPointsToDistribute,
  getScoredParticipants,
  getParticipantsList,
  fetchParticipantIsFetching,
  getDistributeEqually,
  getSelectedParticipants,
  getTotalForEachParticipantDistributedEqually,
  getSelectedRolesAll,
  getParticipants,
  getSelectedParticipantsWithoutScore,
  getTotalDistributed,
  getSelectedSubsidiariesWithName,
  getBalanceAvailable,
  getScoredParticipantsResume,
} from './selectors';
import teamAwardsMock, {
  subsidiaries,
  roles,
  selectedSubsidiaries,
  selectedRoles,
  participants,
  scoredParticipants,
  selectedParticipants,
} from './mock';

describe('src/state/modules/point-management/team-awards/selectors', () => {
  describe('state getters', () => {
    it('check getSubsidiaries', () => {
      expect(getSubsidiaries(state)).to.be.equal(subsidiaries);
    });

    it('check getSelectedSubsidiaries', () => {
      expect(getSelectedSubsidiaries(state)).to.be.equal(selectedSubsidiaries);
    });

    it('check getRoles', () => {
      expect(getRoles(state)).to.be.equal(roles);
    });

    it('check fetchRolesIsFetching', () => {
      expect(fetchRolesIsFetching(state)).to.be.false;
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

    it('check getScoredParticipants', () => {
      expect(getScoredParticipants(state)).to.be.equal(scoredParticipants);
    });

    it('check getParticipantsList', () => {
      expect(getParticipantsList(state)).to.be.equal(participants);
    });

    it('check fetchParticipantIsFetching', () => {
      expect(fetchParticipantIsFetching(state)).to.be.false;
    });

    it('check getDistributeEqually', () => {
      expect(getDistributeEqually(state)).to.be.false;
    });

    it('check getSelectedParticipants', () => {
      expect(getSelectedParticipants(state)).to.be.equal(selectedParticipants);
    });

    it('check getTotalForEachParticipantDistributedEqually', () => {
      expect(getTotalForEachParticipantDistributedEqually(state)).to.be.equal(
        1666.6666666666667,
      );
    });

    it('check getSelectedRolesAll', () => {
      expect(getSelectedRolesAll(state)).to.be.equal(
        teamAwardsMock.selectedRolesAll,
      );
    });
  });

  describe('getParticipants', () => {
    it('write tests', () => {});
  });

  describe('getSelectedParticipantsWithoutScore', () => {
    it('check getSelectedParticipantsWithoutScore', () => {
      expect(getSelectedParticipantsWithoutScore(state)).to.be.equal(0);

      const participantsMock =
        state.pointManagement.teamAwards.participants || {};
      expect(
        getSelectedParticipantsWithoutScore({
          ...state,
          pointManagement: {
            ...state.pointManagement,
            teamAwards: {
              ...state.pointManagement.teamAwards,
              participants: {
                ...participantsMock,
                Supervisor: {
                  ...participantsMock.Supervisor,
                  total: participantsMock.Supervisor.total + 1,
                  list: [
                    ...participantsMock.Supervisor.list,
                    {
                      id: 99,
                      name: 'Fernandinho',
                      subsidiary: 'Unidade GHI',
                      picture: 'photo.jpg',
                      role: roles[0],
                    },
                  ],
                },
              },
            },
          },
        }),
      ).to.be.equal(1);
    });
  });

  describe('getTotalDistributed', () => {
    it('write tests', () => {});
  });

  describe('getSelectedSubsidiariesWithName', () => {
    it('should return default status subsidiaries with label name', () => {
      expect(getSelectedSubsidiariesWithName(state)).to.be.deep.equal([
        { id: 1, label: 'Filial 1' },
        { id: 2, label: 'Filial 2' },
      ]);
    });

    it('should return null when dont have selected subsidiaries', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          teamAwards: {
            ...teamAwardsMock,
            selectedSubsidiaries: null,
          }
        },
      };
      expect(getSelectedSubsidiariesWithName(modifiedState)).to.be.null;
    });

    it('should return null when dont have subsidiaries', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          teamAwards: {
            ...teamAwardsMock,
            subsidiaries: null,
          }
        },
      };
      expect(getSelectedSubsidiariesWithName(modifiedState)).to.be.null;
    });
  });

  describe('getBalanceAvailable', () => {
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
              totalPointsTeamAwards: '',
            },
          },
        }),
      ).to.be.equal(0);
    });
  });

  describe('getScoredParticipantsResume', () => {
    it('check getScoredParticipantsResume', () => {
      expect(getScoredParticipantsResume(state)).to.be.deep.equal({
        'Gerente Comercial': {
          count: 2,
          totalPoints: 221,
        },
        Supervisor: {
          count: 1,
          totalPoints: 210,
        },
      });
    });
  });
});

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
  getWaitingScoredParticipants,
  getParticipantsList,
  fetchParticipantIsFetching,
  getDistributeEqually,
  getSelectedParticipants,
  getTotalForEachParticipantDistributedEqually,
  getSelectedRolesAll,
  getTotalParticipants,
  getIsOpenModalMissingParticipants,
  getSelectedParticipantsWithoutScore,
  getSelectedSubsidiariesWithName,
  getScoredParticipantsResume,
  getTotalWaitingScoredParticipants,
  getTotalScoreScoredParticipants,
  getHasEnoughScore,
  getAvailableScore,
  getIsEnabledToAssignPoints,
  getIsEnabledToDistributePoints,
  getMissingParticipants,
} from './selectors';
import teamAwardsMock, {
  subsidiaries,
  roles,
  selectedSubsidiaries,
  selectedRoles,
  participants,
  scoredParticipants,
  selectedParticipants,
  waitingScoredParticipants,
  participant,
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

    it('check getWaitingScoredParticipants', () => {
      expect(getWaitingScoredParticipants(state)).to.be.equal(
        waitingScoredParticipants,
      );
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

    it('check getTotalParticipants', () => {
      expect(getTotalParticipants(state)).to.be.equal(3);
    });

    it('check getIsOpenModalMissingParticipants', () => {
      expect(getIsOpenModalMissingParticipants(state)).to.be.false;
    });
  });

  describe('getSelectedParticipantsWithoutScore', () => {
    it('should return 0 with default state', () => {
      expect(getSelectedParticipantsWithoutScore(state)).to.be.equal(0);
    });

    it('should return 0 with selected participants null', () => {
      expect(
        getSelectedParticipantsWithoutScore({
          ...state,
          pointManagement: {
            ...state.pointManagement,
            teamAwards: {
              ...state.pointManagement.teamAwards,
              selectedParticipants: null,
            },
          },
        }),
      ).to.be.equal(0);
    });

    it('should return 1 with selected participants and without scored', () => {
      expect(
        getSelectedParticipantsWithoutScore({
          ...state,
          pointManagement: {
            ...state.pointManagement,
            teamAwards: {
              ...state.pointManagement.teamAwards,
              selectedParticipants: [participant.id],
              scoredParticipants: null,
            },
          },
        }),
      ).to.be.equal(1);
    });

    it('should return 0 when selected participant already has score', () => {
      expect(
        getSelectedParticipantsWithoutScore({
          ...state,
          pointManagement: {
            ...state.pointManagement,
            teamAwards: {
              ...state.pointManagement.teamAwards,
              selectedParticipants: [participant.id],
              scoredParticipants,
            },
          },
        }),
      ).to.be.equal(0);
    });

    it('should return 1 when selected participant dont have score', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...state.pointManagement,
          teamAwards: {
            ...state.pointManagement.teamAwards,
            selectedParticipants: [10],
            scoredParticipants,
          },
        },
      };

      expect(getSelectedParticipantsWithoutScore(modifiedState)).to.be.equal(1);
    });
  });

  describe('getTotalWaitingScoredParticipants', () => {
    it('should return 0 with default state', () => {
      expect(getTotalWaitingScoredParticipants(state)).to.be.equal(0);
    });

    it('should return 431 when has waiting scored participants (clone scoredParticipants total)', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          teamAwards: {
            ...teamAwardsMock,
            waitingScoredParticipants: scoredParticipants,
          },
        },
      };

      expect(getTotalWaitingScoredParticipants(modifiedState)).to.be.equal(431);
    });
  });

  describe('getTotalScoreScoredParticipants', () => {
    it('should return 431 with default state', () => {
      expect(getTotalScoreScoredParticipants(state)).to.be.equal(431);
    });

    it('should return 0 when dont have scored participants', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          teamAwards: {
            ...teamAwardsMock,
            scoredParticipants: null,
          },
        },
      };

      expect(getTotalScoreScoredParticipants(modifiedState)).to.be.equal(0);
    });
  });

  describe('getHasEnoughScore', () => {
    it('should return true with default state', () => {
      expect(getHasEnoughScore(state)).to.be.true;
    });

    it('should return false dont have enough points', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            totalPointsTeamAwards: 10,
          },
        },
      };

      expect(getHasEnoughScore(modifiedState)).to.be.false;
    });
  });

  describe('getSelectedSubsidiariesWithName', () => {
    it('should return default status subsidiaries with label name', () => {
      expect(getSelectedSubsidiariesWithName(state)).to.be.deep.equal([
        { id: 1, name: 'Filial 1' },
        { id: 2, name: 'Filial 2' },
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
          },
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
          },
        },
      };

      expect(getSelectedSubsidiariesWithName(modifiedState)).to.be.null;
    });
  });

  describe('getAvailableScore', () => {
    it('should be return 0 with default state', () => {
      expect(getAvailableScore(state)).to.be.equal(4569);
    });

    it('should return 0 with total points team awards 0', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            totalPointsTeamAwards: 0,
          },
        },
      };

      expect(getAvailableScore(modifiedState)).to.be.equal(0);
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

  describe('getIsEnabledToAssignPoints', () => {
    it('should return false with default state', () => {
      expect(getIsEnabledToAssignPoints(state)).to.be.false;
    });

    it('should return true point to distribute and distribute equally true', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          teamAwards: {
            ...teamAwardsMock,
            distributeEqually: true,
          },
        },
      };

      expect(getIsEnabledToAssignPoints(modifiedState)).to.be.true;
    });

    it('should return false when dont have waiting scored points', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          teamAwards: {
            ...teamAwardsMock,
            distributeEqually: false,
            waitingScoredParticipants: null,
          },
        },
      };

      expect(getIsEnabledToAssignPoints(modifiedState)).to.be.false;
    });

    it('should return true when have waiting scored points', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          teamAwards: {
            ...teamAwardsMock,
            distributeEqually: true,
            waitingScoredParticipants: scoredParticipants,
          },
        },
      };

      expect(getIsEnabledToAssignPoints(modifiedState)).to.be.true;
    });
  });

  describe('getIsEnabledToDistributePoints', () => {
    it('should return false with default state', () => {
      expect(getIsEnabledToDistributePoints(state)).to.be.false;
    });

    it('should return false when dont have total points team awards', () => {
      expect(getIsEnabledToDistributePoints({
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            totalPointsTeamAwards: 0,
          }
        }
      })).to.be.false;
    });

    it('should return false when dont have total points team awards', () => {
      expect(getIsEnabledToDistributePoints({
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            totalPointsTeamAwards: 0,
          }
        }
      })).to.be.false;
    });

    it('should return true when dont have more points to distribute', () => {
      expect(getIsEnabledToDistributePoints({
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            totalPointsTeamAwards: 431,
          }
        }
      })).to.be.true;
    });
  });

  describe('getMissingParticipants', () => {
    it('should return 0 with default state', () => {
      expect(getMissingParticipants(state)).to.be.equal(0);
    });

    it('should return 7 with totalParticipants 10', () => {
      expect(getMissingParticipants({
        ...state,
        pointManagement: {
          ...pointManagementMock,
          teamAwards: {
            ...teamAwardsMock,
            totalParticipants: 10,
          }
        }
      })).to.be.equal(7);
    });
  });
});

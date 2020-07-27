import { expect } from 'chai';

import { StoreState } from 'state/root-reducer';
import state from 'state/modules/mock';
import {
  getFetchPointsToDistribute,
  getIsReadyToDistribute,
  getPointsToDistribute,
  getTotalPointsTeamAwards,
  getTotalPointsResaleCooperative,
  getEstablishments,
  getSelectedEstablishment,
  getIsAllowedToStartDistribution,
  getIsResaleCooperativePointsOnly,
  getHasAutonomyToDistribute,
  getIsResaleCooperativeAndTeamAwardPoints,
  getEstablishmentType,
  getDistributePoints,
  getFinishedDistribution,
} from './selectors';
import commonMock, {
  establishments,
  pointsToDistribute,
  selectedEstablishment,
} from './mock';
import pointManagementMock from 'state/modules/point-management/mock';

describe('src/state/modules/point-management/common/selectors', () => {
  describe('state getters', () => {
    it('check getFetchPointsToDistribute', () => {
      expect(getFetchPointsToDistribute(state)).to.be.deep.equal({
        isFetching: false,
        error: '',
      });
    });

    it('check getIsReadyToDistribute', () => {
      expect(getIsReadyToDistribute(state)).to.be.false;
    });

    it('check getPointsToDistribute', () => {
      expect(getPointsToDistribute(state)).to.be.equal(pointsToDistribute);
    });

    it('check getTotalPointsTeamAwards', () => {
      expect(getTotalPointsTeamAwards(state)).to.be.equal(5000);
    });

    it('check getTotalPointsResaleCooperative', () => {
      expect(getTotalPointsResaleCooperative(state)).to.be.equal(10000);
    });

    it('check getEstablishments', () => {
      expect(getEstablishments(state)).to.be.equal(establishments);
    });

    it('check getSelectedEstablishment', () => {
      expect(getSelectedEstablishment(state)).to.be.equal(
        selectedEstablishment,
      );
    });

    it('check getEstablishmentType', () => {
      expect(getEstablishmentType(state)).to.be.equal('Revenda');
    });

    it('check getDistributePoints', () => {
      expect(getDistributePoints(state)).to.be.equal(commonMock.distributePoints);
    });

    it('check getFinishedDistribution', () => {
      expect(getFinishedDistribution(state)).to.be.false;
    });
  });

  describe('getIsResaleCooperativePointsOnly', () => {
    it('should return true with default state', () => {
      expect(getIsResaleCooperativePointsOnly(state)).to.be.true;
    });

    it('should return false when dont have points to distribute in general', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            pointsToDistribute: {
              general: null,
              generalPointId: null,
              resaleCooperative: null,
              teamAwards: null,
            },
          },
        },
      };

      expect(getIsResaleCooperativePointsOnly(modifiedState)).to.be.false;
    });

    it('should return false when have team awards', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            pointsToDistribute: {
              general: null,
              generalPointId: null,
              resaleCooperative: null,
              teamAwards: {
                points: 200,
                pointId: 1,
              },
            },
          },
        },
      };

      expect(getIsResaleCooperativePointsOnly(modifiedState)).to.be.false;
    });

    it('should return false when have general and resale cooperative points', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            pointsToDistribute: {
              general: 6000,
              generalPointId: 2,
              resaleCooperative: {
                maxInvoicePercentage: 20,
                pointId: 1,
                points: 20,
              },
              teamAwards: null,
            },
          },
        },
      };

      expect(getIsResaleCooperativePointsOnly(modifiedState)).to.be.false;
    });

    it('should return true when have resale cooperative points only', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            pointsToDistribute: {
              general: null,
              generalPointId: null,
              resaleCooperative: {
                pointId: 1,
                maxInvoicePercentage: 20,
                points: 20,
              },
              teamAwards: null,
            },
          },
        },
      };

      expect(getIsResaleCooperativePointsOnly(modifiedState)).to.be.true;
    });
  });

  describe('getHasAutonomyToDistribute', () => {
    it('should return false with default state', () => {
      expect(getHasAutonomyToDistribute(state)).to.be.false;
    });

    it('should return false when has team award points', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            pointsToDistribute: {
              general: 600,
              generalPointId: 3,
              resaleCooperative: {
                pointId: 1,
                maxInvoicePercentage: 20,
                points: 20,
              },
              teamAwards: {
                pointId: 2,
                points: 60,
              },
            },
          },
        },
      };

      expect(getHasAutonomyToDistribute(modifiedState)).to.be.false;
    });

    it('should return true when has only general and resale cooperative points', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            pointsToDistribute: {
              general: 600,
              generalPointId: 2,
              resaleCooperative: {
                pointId: 1,
                maxInvoicePercentage: 20,
                points: 0,
              },
              teamAwards: null,
            },
          },
        },
      };

      expect(getHasAutonomyToDistribute(modifiedState)).to.be.true;
    });

    it('should return false when dont have general points', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            pointsToDistribute: {
              general: null,
              generalPointId: null,
              resaleCooperative: {
                pointId: 1,
                maxInvoicePercentage: 20,
                points: 0,
              },
              teamAwards: {
                pointId: 2,
                points: 50,
              },
            },
          },
        },
      };

      expect(getHasAutonomyToDistribute(modifiedState)).to.be.false;
    });
  });

  describe('getIsResaleCooperativeAndTeamAwardPoints', () => {
    it('should return false with default state', () => {
      expect(getIsResaleCooperativeAndTeamAwardPoints(state)).to.be.false;
    });

    it('should return true when have resale cooperative and team award points', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            pointsToDistribute: {
              general: null,
              generalPointId: null,
              resaleCooperative: {
                points: 50,
                pointId: 1,
                maxInvoicePercentage: 0,
              },
              teamAwards: {
                points: 50,
                pointId: 2,
              },
            },
          },
        },
      };

      expect(getIsResaleCooperativeAndTeamAwardPoints(modifiedState)).to.be
        .true;
    });

    it('should return false when have only team award points', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            pointsToDistribute: {
              general: null,
              generalPointId: null,
              resaleCooperative: null,
              teamAwards: {
                pointId: 1,
                points: 50,
              },
            },
          },
        },
      };

      expect(getIsResaleCooperativeAndTeamAwardPoints(modifiedState)).to.be
        .false;
    });

    it('should return false when have only general points', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            pointsToDistribute: {
              general: 210,
              generalPointId: 1,
              resaleCooperative: null,
              teamAwards: null,
            },
          },
        },
      };

      expect(getIsResaleCooperativeAndTeamAwardPoints(modifiedState)).to.be
        .false;
    });
  });

  describe('getIsAllowedToStartDistribution,', () => {
    it('should return false with default state', () => {
      expect(getIsAllowedToStartDistribution(state)).to.be.false;
    });

    it('should return false when resale cooperative + team awards < general points', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            totalPointsResaleCooperative: 200,
            totalPointsTeamAwards: 200,
            pointsToDistribute: {
              general: 5000,
              generalPointId: 1,
              resaleCooperative: null,
              teamAwards: null,
            },
          },
        },
      };

      expect(getIsAllowedToStartDistribution(modifiedState)).to.be.false;
    });

    it('should return true when resale cooperative + team awards === general points', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            totalPointsTeamAwards: 2500,
            totalPointsResaleCooperative: 2500,
            pointsToDistribute: {
              general: 5000,
              generalPointId: 1,
              resaleCooperative: null,
              teamAwards: null,
            },
          },
        },
      };

      expect(getIsAllowedToStartDistribution(modifiedState)).to.be.true;
    });

    it('should return true when total team awards === general points', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            totalPointsTeamAwards: 5000,
            totalPointsResaleCooperative: 0,
            pointsToDistribute: {
              general: 5000,
              generalPointId: 1,
              resaleCooperative: null,
              teamAwards: null,
            },
          },
        },
      };

      expect(getIsAllowedToStartDistribution(modifiedState)).to.be.true;
    });

    it('should return true when total resale cooperative === general points', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            totalPointsTeamAwards: 0,
            totalPointsResaleCooperative: 5000,
            pointsToDistribute: {
              general: 5000,
              generalPointId: 1,
              resaleCooperative: null,
              teamAwards: null,
            },
          },
        },
      };

      expect(getIsAllowedToStartDistribution(modifiedState)).to.be.true;
    });

    it('should return false when dont have general points', () => {
      const modifiedState: StoreState = {
        ...state,
        pointManagement: {
          ...pointManagementMock,
          common: {
            ...commonMock,
            totalPointsResaleCooperative: 0,
            totalPointsTeamAwards: 0,
            pointsToDistribute: {
              general: null,
              generalPointId: null,
              resaleCooperative: null,
              teamAwards: null,
            },
          },
        },
      };

      expect(getIsAllowedToStartDistribution(modifiedState)).to.be.false;
    });
  });
});

import { expect } from 'chai';

import pointManagementMock from 'state/modules/point-management/mock';
import commonMock from 'state/modules/point-management/common/mock';
import state from 'state/modules/mock';
import {
  getSubsidiaries,
  getSelectedSubsidiaries,
  getSelectedSubsidiariesWithName,
  getRoles,
  fetchRolesIsFetching,
  getSelectedRoles,
  getParticipantFinder,
  getPointsToDistribute,
  getBalanceAvailable,
  getScoredParticipants,
  getScoredParticipantsResume,
  getParticipants,
  fetchParticipantIsFetching,
  getDistributeEqually,
  getParticipantListTotalWithoutScore,
  getTotalForEachParticipantDistributedEqually,
  getSelectedRolesAll,
  getSelectedParticipants,
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

  it('check getScoredParticipants', () => {
    expect(getScoredParticipants(state)).to.be.equal(scoredParticipants);
  });

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

  it('check getParticipants', () => {
    expect(getParticipants(state)).to.be.equal(participants);
  });

  it('check fetchParticipantIsFetching', () => {
    expect(fetchParticipantIsFetching(state)).to.be.false;
  });

  it('check getDistributeEqually', () => {
    expect(getDistributeEqually(state)).to.be.false;
  });

  it('check getParticipantListTotalWithoutScore', () => {
    expect(getParticipantListTotalWithoutScore(state)).to.be.equal(0);

    const participantsMock =
      state.pointManagement.teamAwards.participants || {};
    expect(
      getParticipantListTotalWithoutScore({
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

  it('check getSelectedParticipants', () => {
    expect(getSelectedParticipants(state)).to.be.equal(selectedParticipants);
  });
});

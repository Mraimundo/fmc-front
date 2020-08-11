import { expect } from 'chai';

import {
  toggleRoleSelection,
  setSelectedRolesAll,
  toggleSubsidiarySelection,
  scoreParticipant,
  getParticipantByScoredRule,
  getParticipantScore,
  extractParticipantsFromList,
  scoreAllParticipantsEqually,
  isSelectedParticipant,
  isScoredParticipant,
  selectAllParticipantsByRole,
  deselectAllParticipants,
  toggleSelectedParticipant,
  migrateWaitingScoredToScored,
  extractIdAndPointsFromScoredParticipants,
} from './utils';
import {
  participant,
  participants,
  selectedParticipants,
  scoredParticipants,
  selectedRoles,
  roles,
  selectedSubsidiaries,
} from './mock';
import {
  Participant,
  ScoredParticipant,
  WaitingScoredParticipant,
} from './types';

describe('src/state/modules/point-management/team-awards/utils', () => {
  describe('toggleRoleSelection', () => {
    test('should be a function', () => {
      expect(toggleRoleSelection).to.be.a('function');
    });

    test('should return an array', () => {
      expect(toggleRoleSelection(selectedRoles, 1)).to.be.an('array');
    });

    it(`should return an array with new role`, () => {
      expect(toggleRoleSelection(selectedRoles, 3)).to.be.deep.equal([
        ...selectedRoles,
        3,
      ]);
    });

    it(`should return an array with unique role`, () => {
      expect(toggleRoleSelection(selectedRoles, 1)).to.be.deep.equal([2]);
    });

    it(`should return null`, () => {
      expect(toggleRoleSelection([1], 1)).to.be.null;
    });
  });

  describe('setSelectedRolesAll', () => {
    test('should be a function', () => {
      expect(setSelectedRolesAll).to.be.a('function');
    });

    test('should be return array with unique role when dont have selected roles all', () => {
      expect(setSelectedRolesAll(null, 'Supervisor')).to.be.deep.equal([
        'Supervisor',
      ]);
    });

    test('should remove role from result if already has in selected roles all', () => {
      expect(
        setSelectedRolesAll(['Supervisor', 'Gerente'], 'Supervisor'),
      ).to.be.deep.equal(['Gerente']);
    });

    test('should return null when selected roles all has only 1 role and role param its the same', () => {
      expect(setSelectedRolesAll(['Supervisor'], 'Supervisor')).to.be.null;
    });

    test('should concat values to add role to selected roles all', () => {
      expect(setSelectedRolesAll(['Supervisor'], 'Gerente')).to.be.deep.equal([
        'Supervisor',
        'Gerente',
      ]);
    });
  });

  describe('toggleSubsidiarySelection', () => {
    test('should be a function', () => {
      expect(toggleSubsidiarySelection).to.be.a('function');
    });

    test('should return an array', () => {
      expect(toggleSubsidiarySelection(selectedSubsidiaries, 1)).to.be.an(
        'array',
      );
    });

    it(`should return an array with new subsidiary`, () => {
      expect(
        toggleSubsidiarySelection(selectedSubsidiaries, 10),
      ).to.be.deep.equal([...selectedSubsidiaries, 10]);
    });

    it(`should return an array with unique subsidiary`, () => {
      expect(toggleSubsidiarySelection(selectedRoles, 1)).to.be.deep.equal([2]);
    });

    it(`should return null`, () => {
      expect(toggleSubsidiarySelection([1], 1)).to.be.null;
    });
  });

  describe('scoreParticipant', () => {
    const waitingScoredParticipants = scoredParticipants; // clone only
    const points = 2000;
    const notScoredParticipant: Participant = {
      id: 4,
      name: 'Joelton Guerreiro',
      role: roles[0],
      subsidiary: 'Unidade ABC',
      picture: null,
    };
    test('should be a function', () => {
      expect(scoreParticipant).to.be.a('function');
    });

    test('should return an array', () => {
      expect(
        scoreParticipant(participant, points, waitingScoredParticipants),
      ).to.be.an('array');
    });

    it(`should return correct values without pre scored participants`, () => {
      expect(
        scoreParticipant(notScoredParticipant, points, null),
      ).to.be.deep.equal([
        {
          ...notScoredParticipant,
          points,
        },
      ]);
    });

    it(`should return correct values with scored participants and existing participant`, () => {
      expect(
        scoreParticipant(participant, 210, waitingScoredParticipants),
      ).to.be.deep.equal([
        ...waitingScoredParticipants.filter(
          scoredParticipant => scoredParticipant.id !== participant.id,
        ),
        {
          ...participant,
          points: 210,
        },
      ]);
    });

    it(`should return correct values with waiting scored participants and not existing participant`, () => {
      expect(
        scoreParticipant(notScoredParticipant, 190, waitingScoredParticipants),
      ).to.be.deep.equal([
        ...waitingScoredParticipants,
        {
          ...notScoredParticipant,
          points: 190,
        },
      ]);
    });

    // it(`should not score participant with 0 points`, () => {
    //   expect(
    //     scoreParticipant(notScoredParticipant, 0, null),
    //   ).to.be.null;
    // });
  });

  describe('getParticipantByScoredRule', () => {
    test('should be a function', () => {
      expect(getParticipantByScoredRule).to.be.a('function');
    });

    test('should return undefined without scored rule', () => {
      expect(getParticipantByScoredRule(null, 3)).to.be.undefined;
    });

    test('should return participant where participant id be inside scored rule', () => {
      expect(getParticipantByScoredRule(scoredParticipants, 3)).to.be.equal(
        scoredParticipants[2],
      );
    });

    test('should return undefined when participantId dont have in scored rule', () => {
      expect(getParticipantByScoredRule(scoredParticipants, 4)).to.be.undefined;
    });
  });

  describe('getParticipantScore', () => {
    test('should be a function', () => {
      expect(getParticipantScore).to.be.a('function');
    });

    test('should return null', () => {
      expect(getParticipantScore(null, null, 1)).to.be.equal(0);
    });

    test('should return a correct points with scored participants', () => {
      expect(getParticipantScore(null, scoredParticipants, 1)).to.be.equal(200);
    });

    test('should return a correct points with waiting scored participants', () => {
      const waitingScoredParticipants = [scoredParticipants[2]];
      expect(
        getParticipantScore(waitingScoredParticipants, null, 3),
      ).to.be.equal(21);
    });

    test('should return 0 when participant dont have in anyone scored rule', () => {
      const waitingScoredParticipants = [scoredParticipants[1]];
      expect(
        getParticipantScore(waitingScoredParticipants, scoredParticipants, 5),
      ).to.be.equal(0);
    });
  });

  describe('extractParticipantsFromList', () => {
    test('should be a function', () => {
      expect(extractParticipantsFromList).to.be.a('function');
    });

    test('should return only participants with total and without list index', () => {
      expect(extractParticipantsFromList(null)).to.be.null;
    });

    test('should return only participants with total and without list index', () => {
      expect(extractParticipantsFromList(participants)).to.be.deep.equal([
        participants['Gerente Comercial'].list[0],
        participants['Gerente Comercial'].list[1],
        participants.Supervisor.list[0],
      ]);
    });
  });

  describe('scoreAllParticipantsEqually', () => {
    test('should be a function', () => {
      expect(scoreAllParticipantsEqually).to.be.a('function');
    });

    test('should return an array', () => {
      expect(
        scoreAllParticipantsEqually({
          selectedParticipants: [1],
          waitingScoredParticipants: null,
          participants,
          points: 200,
          pointsToDistribute: 0,
        }),
      ).to.be.an('array');
    });

    test('should return null when dont have selected participants ', () => {
      expect(
        scoreAllParticipantsEqually({
          selectedParticipants: null,
          waitingScoredParticipants: null,
          participants,
          points: 200,
          pointsToDistribute: 0,
        }),
      ).to.be.null;
    });

    test('should return scored participants with 200 points', () => {
      expect(
        scoreAllParticipantsEqually({
          selectedParticipants: [1],
          waitingScoredParticipants: null,
          participants,
          points: 200,
          pointsToDistribute: 0,
        }),
      ).to.be.deep.equal([
        {
          ...participant,
          points: 200,
        },
      ]);
    });

    test('should return concat scored participants with 500 points', () => {
      expect(
        scoreAllParticipantsEqually({
          selectedParticipants: [2],
          waitingScoredParticipants: [{ ...participant, points: 10 }],
          participants,
          points: 500,
          pointsToDistribute: 0,
        }),
      ).to.be.deep.equal([
        { ...participant, points: 10 },
        {
          ...scoredParticipants[1],
          points: 500,
        },
      ]);
    });

    test('should return correct values with not exact division', () => {
      const result = scoreAllParticipantsEqually({
        selectedParticipants: [1, 2, 3],
        waitingScoredParticipants: null,
        participants,
        points: 666.6666666666666,
        pointsToDistribute: 2000,
      });

      const expectedResult = [
        {
          ...scoredParticipants[0],
          points: 666.67,
        },
        {
          ...scoredParticipants[1],
          points: 666.67,
        },
        {
          ...scoredParticipants[2],
          points: 666.66,
        },
      ];

      expect(result).to.have.lengthOf(expectedResult.length);
      expectedResult.forEach(v => expect(result).to.deep.include(v));
    });

    test('should return correct values with not exact division and concating participant to already waiting to score', () => {
      const fakeParticipant = {
        id: 4,
        name: 'Fernandinho',
        subsidiary: 'Unidade B',
        picture: null,
        role: roles[0],
        points: 20,
      };

      const result = scoreAllParticipantsEqually({
        selectedParticipants: [1, 2, 3],
        waitingScoredParticipants: [fakeParticipant],
        participants: {
          ...participants,
          'Gerente Comercial': {
            count: 3,
            list: [...participants['Gerente Comercial'].list, fakeParticipant],
          },
        },
        points: 72.6666666667,
        pointsToDistribute: 218,
      });

      const expectedResult = [
        {
          ...scoredParticipants[0],
          points: 72.67,
        },
        {
          ...scoredParticipants[1],
          points: 72.67,
        },
        {
          ...scoredParticipants[2],
          points: 72.66,
        },
        fakeParticipant,
      ];

      expect(result).to.have.lengthOf(expectedResult.length);
      expectedResult.forEach(v => expect(result).to.deep.include(v));
    });
  });

  describe('isSelectedParticipant', () => {
    test('shoud be a function', () => {
      expect(isSelectedParticipant).to.be.a('function');
    });

    test('shoud be return a boolean', () => {
      expect(isSelectedParticipant(null, 1)).to.be.a('boolean');
    });

    test('shoud be return null when dont have selected participants', () => {
      expect(isSelectedParticipant(null, 1)).to.be.false;
    });

    test('shoud be return true when participantId has inside selected participants array', () => {
      expect(isSelectedParticipant([1, 2], 1)).to.be.true;
    });

    test('shoud be return false when  participantId hasnt inside selected participants array', () => {
      expect(isSelectedParticipant([1, 2], 3)).to.be.false;
    });
  });

  describe('isScoredParticipant', () => {
    test('should be a function', () => {
      expect(isScoredParticipant).to.be.a('function');
    });

    test('should return a boolean', () => {
      expect(isScoredParticipant(null, 1)).to.be.a('boolean');
    });

    test('should return false when participantId dont have scored participants', () => {
      expect(isScoredParticipant(null, 1)).to.be.false;
      expect(isScoredParticipant(scoredParticipants, 10)).to.be.false;
    });

    test('should return true when participantId have scored participants', () => {
      expect(isScoredParticipant(scoredParticipants, 1)).to.be.true;
    });
  });

  describe('selectAllParticipantsByRole', () => {
    test('should be a function', () => {
      expect(selectAllParticipantsByRole).to.be.a('function');
    });

    test('should be return null when dont have participants', () => {
      expect(
        selectAllParticipantsByRole({
          selectedParticipants,
          scoredParticipants,
          participants: null,
          role: roles[0].name,
        }),
      ).to.be.null;
    });

    test('should be return null when all participants already have score', () => {
      expect(
        selectAllParticipantsByRole({
          selectedParticipants,
          scoredParticipants,
          participants,
          role: roles[0].name,
        }),
      ).to.be.null;
    });

    test('should be return array with all participant ids with role[0].name', () => {
      expect(
        selectAllParticipantsByRole({
          selectedParticipants,
          scoredParticipants: null,
          participants,
          role: roles[0].name,
        }),
      ).to.be.deep.equal([1, 3]);
    });

    test('should be return array with all participant ids with role[0].name', () => {
      expect(
        selectAllParticipantsByRole({
          selectedParticipants: [1],
          scoredParticipants: null,
          participants,
          role: roles[0].name,
        }),
      ).to.be.deep.equal([1, 3]);
    });
  });

  describe('deselectAllParticipants', () => {
    test('should be a function', () => {
      expect(deselectAllParticipants).to.be.a('function');
    });

    test('should return null when dont have selected participants or participants list', () => {
      expect(deselectAllParticipants(null, null, roles[0].name)).to.be.null;
      expect(deselectAllParticipants([1], null, roles[0].name)).to.be.null;
      expect(deselectAllParticipants(null, participants, roles[0].name)).to.be
        .null;
    });

    test('should return selected participants without role param', () => {
      expect(
        deselectAllParticipants([1, 2], participants, roles[1].name),
      ).to.be.deep.equal([1]);
    });

    test('should return null when deselect all participants', () => {
      expect(deselectAllParticipants([2], participants, roles[1].name)).to.be
        .null;
    });
  });

  describe('toggleSelectedParticipant', () => {
    test('should be a function', () => {
      expect(toggleSelectedParticipant).to.be.a('function');
    });

    test('should return selected participants when dont have participant id', () => {
      expect(toggleSelectedParticipant(selectedParticipants, null)).to.be.equal(
        selectedParticipants,
      );
    });

    test('should return array with 1 element with participantId', () => {
      expect(toggleSelectedParticipant(null, 1)).to.be.deep.equal([1]);
    });

    test('should return array adding new participant add to existing array', () => {
      expect(toggleSelectedParticipant([1, 2, 3], 10)).to.be.deep.equal([
        1,
        2,
        3,
        10,
      ]);
    });

    test('should return array removing participant id', () => {
      expect(toggleSelectedParticipant([1, 2, 3], 2)).to.be.deep.equal([1, 3]);
    });
  });

  describe('migrateWaitingScoredToScored', () => {
    test('should be a function', () => {
      expect(migrateWaitingScoredToScored).to.be.a('function');
    });

    test('should return null when dont have waiting or scored participants', () => {
      expect(migrateWaitingScoredToScored(null, scoredParticipants)).to.be.null;
    });

    test('should return array assigned between waiting and scored participants', () => {
      const waitingScoredParticipants: WaitingScoredParticipant[] = [
        {
          id: 10,
          name: 'Nome Teste',
          points: 20,
          role: roles[0],
          subsidiary: 'Filial',
        },
      ];

      expect(
        migrateWaitingScoredToScored(
          waitingScoredParticipants,
          scoredParticipants,
        ),
      ).to.be.deep.equal([...scoredParticipants, ...waitingScoredParticipants]);
    });
  });

  describe('extractIdAndPointsFromScoredParticipants', () => {
    test('should be a function', () => {
      expect(extractIdAndPointsFromScoredParticipants).to.be.a('function');
    });

    test('should return array with id and value', () => {
      expect(
        extractIdAndPointsFromScoredParticipants(scoredParticipants),
      ).to.be.deep.equal(
        scoredParticipants.map(({ id, points: value }) => ({ id, value })),
      );
    });
  });
});

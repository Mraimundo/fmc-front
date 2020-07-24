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
    it('should be a function', () => {
      expect(toggleRoleSelection).to.be.a('function');
    });

    it('should return an array', () => {
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
    it('should be a function', () => {
      expect(setSelectedRolesAll).to.be.a('function');
    });

    it('should be return array with unique role when dont have selected roles all', () => {
      expect(setSelectedRolesAll(null, 'Supervisor')).to.be.deep.equal([
        'Supervisor',
      ]);
    });

    it('should remove role from result if already has in selected roles all', () => {
      expect(
        setSelectedRolesAll(['Supervisor', 'Gerente'], 'Supervisor'),
      ).to.be.deep.equal(['Gerente']);
    });

    it('should return null when selected roles all has only 1 role and role param its the same', () => {
      expect(setSelectedRolesAll(['Supervisor'], 'Supervisor')).to.be.null;
    });

    it('should concat values to add role to selected roles all', () => {
      expect(setSelectedRolesAll(['Supervisor'], 'Gerente')).to.be.deep.equal([
        'Supervisor',
        'Gerente',
      ]);
    });
  });

  describe('toggleSubsidiarySelection', () => {
    it('should be a function', () => {
      expect(toggleSubsidiarySelection).to.be.a('function');
    });

    it('should return an array', () => {
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
    const waitingScoredParticipants = scoredParticipants; //clone only
    const points = 2000;
    const notScoredParticipant: Participant = {
      id: 4,
      name: 'Joelton Guerreiro',
      role: roles[0],
      subsidiary: 'Unidade ABC',
      picture: null,
    };
    it('should be a function', () => {
      expect(scoreParticipant).to.be.a('function');
    });

    it('should return an array', () => {
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

    it(`should not score participant with 0 points`, () => {
      expect(
        scoreParticipant(notScoredParticipant, 0, null),
      ).to.be.null;
    });
  });

  describe('getParticipantByScoredRule', () => {
    it('should be a function', () => {
      expect(getParticipantByScoredRule).to.be.a('function');
    });

    it('should return undefined without scored rule', () => {
      expect(getParticipantByScoredRule(null, 3)).to.be.undefined;
    });

    it('should return participant where participant id be inside scored rule', () => {
      expect(getParticipantByScoredRule(scoredParticipants, 3)).to.be.equal(
        scoredParticipants[1],
      );
    });

    it('should return undefined when participantId dont have in scored rule', () => {
      expect(getParticipantByScoredRule(scoredParticipants, 4)).to.be.undefined;
    });
  });

  describe('getParticipantScore', () => {
    it('should be a function', () => {
      expect(getParticipantScore).to.be.a('function');
    });

    it('should return null', () => {
      expect(getParticipantScore(null, null, 1)).to.be.equal(0);
    });

    it('should return a correct points with scored participants', () => {
      expect(getParticipantScore(null, scoredParticipants, 1)).to.be.equal(200);
    });

    it('should return a correct points with waiting scored participants', () => {
      const waitingScoredParticipants = [scoredParticipants[1]];
      expect(
        getParticipantScore(waitingScoredParticipants, null, 3),
      ).to.be.equal(21);
    });

    it('should return 0 when participant dont have in anyone scored rule', () => {
      const waitingScoredParticipants = [scoredParticipants[1]];
      expect(
        getParticipantScore(waitingScoredParticipants, scoredParticipants, 5),
      ).to.be.equal(0);
    });
  });

  describe('extractParticipantsFromList', () => {
    it('should be a function', () => {
      expect(extractParticipantsFromList).to.be.a('function');
    });

    it('should return only participants with total and without list index', () => {
      expect(extractParticipantsFromList(null)).to.be.null;
    });

    it('should return only participants with total and without list index', () => {
      expect(extractParticipantsFromList(participants)).to.be.deep.equal([
        participants['Gerente Comercial'].list[0],
        participants['Gerente Comercial'].list[1],
        participants['Supervisor'].list[0],
      ]);
    });
  });

  describe('scoreAllParticipantsEqually', () => {
    it('should be a function', () => {
      expect(scoreAllParticipantsEqually).to.be.a('function');
    });

    it('should return an array', () => {
      expect(
        scoreAllParticipantsEqually({
          selectedParticipants: [1],
          waitingScoredParticipants: null,
          participants,
          points: 200,
        }),
      ).to.be.an('array');
    });

    it('should return null when dont have selected participants ', () => {
      expect(
        scoreAllParticipantsEqually({
          selectedParticipants: null,
          waitingScoredParticipants: null,
          participants,
          points: 200,
        }),
      ).to.be.null;
    });

    it('should return scored participants with 200 points', () => {
      expect(
        scoreAllParticipantsEqually({
          selectedParticipants: [1],
          waitingScoredParticipants: null,
          participants,
          points: 200,
        }),
      ).to.be.deep.equal([
        {
          ...participant,
          points: 200,
        },
      ]);
    });

    it('should return concat scored participants with 500 points', () => {
      expect(
        scoreAllParticipantsEqually({
          selectedParticipants: [2],
          waitingScoredParticipants: [{ ...participant, points: 10 }],
          participants,
          points: 500,
        }),
      ).to.be.deep.equal([
        { ...participant, points: 10 },
        {
          ...scoredParticipants[2],
          points: 500,
        },
      ]);
    });
  });

  describe('isSelectedParticipant', () => {
    it('shoud be a function', () => {
      expect(isSelectedParticipant).to.be.a('function');
    });

    it('shoud be return a boolean', () => {
      expect(isSelectedParticipant(null, 1)).to.be.a('boolean');
    });

    it('shoud be return null when dont have selected participants', () => {
      expect(isSelectedParticipant(null, 1)).to.be.false;
    });

    it('shoud be return true when participantId has inside selected participants array', () => {
      expect(isSelectedParticipant([1, 2], 1)).to.be.true;
    });

    it('shoud be return false when  participantId hasnt inside selected participants array', () => {
      expect(isSelectedParticipant([1, 2], 3)).to.be.false;
    });
  });

  describe('isScoredParticipant', () => {
    it('should be a function', () => {
      expect(isScoredParticipant).to.be.a('function');
    });

    it('should return a boolean', () => {
      expect(isScoredParticipant(null, 1)).to.be.a('boolean');
    });

    it('should return false when participantId dont have scored participants', () => {
      expect(isScoredParticipant(null, 1)).to.be.false;
      expect(isScoredParticipant(scoredParticipants, 10)).to.be.false;
    });

    it('should return true when participantId have scored participants', () => {
      expect(isScoredParticipant(scoredParticipants, 1)).to.be.true;
    });
  });

  describe('selectAllParticipantsByRole', () => {
    it('should be a function', () => {
      expect(selectAllParticipantsByRole).to.be.a('function');
    });

    it('should be return null when dont have participants', () => {
      expect(
        selectAllParticipantsByRole({
          selectedParticipants,
          scoredParticipants,
          participants: null,
          role: roles[0].name,
        }),
      ).to.be.null;
    });

    it('should be return null when all participants already have score', () => {
      expect(
        selectAllParticipantsByRole({
          selectedParticipants,
          scoredParticipants,
          participants,
          role: roles[0].name,
        }),
      ).to.be.null;
    });

    it('should be return array with all participant ids with role[0].name', () => {
      expect(
        selectAllParticipantsByRole({
          selectedParticipants,
          scoredParticipants: null,
          participants,
          role: roles[0].name,
        }),
      ).to.be.deep.equal([1, 3]);
    });

    it('should be return array with all participant ids with role[0].name', () => {
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
    it('should be a function', () => {
      expect(deselectAllParticipants).to.be.a('function');
    });

    it('should return null when dont have selected participants or participants list', () => {
      expect(deselectAllParticipants(null, null, roles[0].name)).to.be.null;
      expect(deselectAllParticipants([1], null, roles[0].name)).to.be.null;
      expect(deselectAllParticipants(null, participants, roles[0].name)).to.be
        .null;
    });

    it('should return selected participants without role param', () => {
      expect(
        deselectAllParticipants([1, 2], participants, roles[1].name),
      ).to.be.deep.equal([1]);
    });

    it('should return null when deselect all participants', () => {
      expect(deselectAllParticipants([2], participants, roles[1].name)).to.be
        .null;
    });
  });

  describe('toggleSelectedParticipant', () => {
    it('should be a function', () => {
      expect(toggleSelectedParticipant).to.be.a('function');
    });

    it('should return selected participants when dont have participant id', () => {
      expect(toggleSelectedParticipant(selectedParticipants, null)).to.be.equal(
        selectedParticipants,
      );
    });

    it('should return array with 1 element with participantId', () => {
      expect(toggleSelectedParticipant(null, 1)).to.be.deep.equal([1]);
    });

    it('should return array adding new participant add to existing array', () => {
      expect(toggleSelectedParticipant([1, 2, 3], 10)).to.be.deep.equal([
        1,
        2,
        3,
        10,
      ]);
    });

    it('should return array removing participant id', () => {
      expect(toggleSelectedParticipant([1, 2, 3], 2)).to.be.deep.equal([1, 3]);
    });
  });

  describe('migrateWaitingScoredToScored', () => {
    it('should be a function', () => {
      expect(migrateWaitingScoredToScored).to.be.a('function');
    });

    it('should return null when dont have waiting or scored participants', () => {
      expect(migrateWaitingScoredToScored(null, scoredParticipants)).to.be.null;
    });

    it('should return array assigned between waiting and scored participants', () => {
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
    it('should be a function', () => {
      expect(extractIdAndPointsFromScoredParticipants).to.be.a('function');
    });

    it('should return null when dont have scored participants', () => {
      expect(extractIdAndPointsFromScoredParticipants(null)).to.be.null;
    });

    it('should return array with id and value', () => {
      expect(
        extractIdAndPointsFromScoredParticipants(scoredParticipants),
      ).to.be.deep.equal(
        scoredParticipants.map(({ id, points: value }) => ({ id, value })),
      );
    });
  });
});

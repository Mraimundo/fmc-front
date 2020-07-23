import { expect } from 'chai';

import {
  toggleSubsidiarySelection,
  toggleRoleSelection,
  scoreParticipant,
  assignPoints,
  getParticipantScore,
  scoreAllParticipantsEqually,
  extractParticipantsFromList,
} from './utils';
import {
  participant,
  participants,
  scoredParticipants,
  selectedRoles,
  roles,
  selectedSubsidiaries,
} from './mock';
import { Participant, ScoredParticipant } from './types';

describe('src/state/modules/point-management/team-awards/utils', () => {
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

  describe('scoreParticipant', () => {
    const points = '2000';
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
        scoreParticipant(participant, points, scoredParticipants),
      ).to.be.an('array');
    });

    it(`should return correct values without pre scored participants`, () => {
      expect(
        scoreParticipant(notScoredParticipant, points, []),
      ).to.be.deep.equal([
        {
          ...notScoredParticipant,
          points,
          assigned: false,
        },
      ]);
    });

    it(`should return correct values with scored participants and existing participant`, () => {
      expect(
        scoreParticipant(participant, '210', scoredParticipants),
      ).to.be.deep.equal([
        ...scoredParticipants.filter(
          scoredParticipant => scoredParticipant.id !== participant.id,
        ),
        {
          ...participant,
          points: '210',
          assigned: false,
        },
      ]);
    });

    it(`should return correct values with scored participants and not existing participant`, () => {
      expect(
        scoreParticipant(notScoredParticipant, '190', scoredParticipants),
      ).to.be.deep.equal([
        ...scoredParticipants,
        {
          ...notScoredParticipant,
          points: '190',
          assigned: false,
        },
      ]);
    });
  });

  describe('assignPoints', () => {
    it('should be a function', () => {
      expect(assignPoints).to.be.a('function');
    });

    it('should return null', () => {
      expect(assignPoints(null)).to.be.null;
    });

    it('should return an array', () => {
      expect(assignPoints(scoredParticipants)).to.be.an('array');
    });

    it('should return an array assigned all points', () => {
      const response = scoredParticipants.map(
        (scoredParticipant: ScoredParticipant) => ({
          ...scoredParticipant,
          assigned: true,
        }),
      );

      expect(assignPoints(scoredParticipants)).to.be.deep.equal(response);
    });
  });

  describe('getParticipantScore', () => {
    it('should be a function', () => {
      expect(getParticipantScore).to.be.a('function');
    });

    it('should return null', () => {
      expect(getParticipantScore(null, 1)).to.be.empty;
    });

    it('should return a correct points', () => {
      expect(getParticipantScore(scoredParticipants, 1)).to.be.equal('200');
      expect(getParticipantScore(scoredParticipants, 2)).to.be.equal('210');
    });
  });

  describe('scoreAllParticipantsEqually', () => {
    it('should be a function', () => {
      expect(scoreAllParticipantsEqually).to.be.a('function');
    });

    it('should return null', () => {
      expect(scoreAllParticipantsEqually(null, '200')).to.be.null;
    });

    it('should return an array', () => {
      expect(scoreAllParticipantsEqually(scoredParticipants, '200')).to.be.an(
        'array',
      );
    });

    it('should return an array assigned all points', () => {
      const response = scoredParticipants.map(
        (scoredParticipant: ScoredParticipant) => ({
          ...scoredParticipant,
          points: '200',
        }),
      );

      expect(
        scoreAllParticipantsEqually(scoredParticipants, '200'),
      ).to.be.deep.equal(response);
    });
  });

  describe('extractParticipantsFromList', () => {
    it('should return only participants with total and without list index', () => {
      expect(extractParticipantsFromList(participants)).to.be.deep.equal([
        participants['Gerente Comercial'].list[0],
        participants['Gerente Comercial'].list[1],
        participants['Supervisor'].list[0],
      ]);
    });
  });
});

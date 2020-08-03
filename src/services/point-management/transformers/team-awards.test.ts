import { expect } from 'chai';

import { FetchSubsidiariesRawData } from 'services/point-management/team-awards';
import { participants } from 'state/modules/point-management/team-awards/mock';
import {
  transformSubsidiariesRawData,
  transformParticipantsRawData,
} from './team-awards';

describe('src/services/point-management/transformers/team-awards', () => {
  describe('transformSubsidiariesRawData', () => {
    const rawSubsidiaries: FetchSubsidiariesRawData[] = [
      {
        city: 'SAP',
        establishment_id: 1,
        id: 1,
        name: 'Filial 1',
      },
      {
        city: 'SAP',
        establishment_id: 2,
        id: 2,
        name: 'Filial 2',
      },
    ];

    test('should be a function', () => {
      expect(transformSubsidiariesRawData).to.be.a('function');
    });

    test('should transform with id and name only', () => {
      expect(transformSubsidiariesRawData(rawSubsidiaries)).to.be.deep.equal([
        { id: 1, name: 'Filial 1' },
        { id: 2, name: 'Filial 2' },
      ]);
    });

    test('should return null when dont have subsidiaries', () => {
      expect(transformSubsidiariesRawData([])).to.be.null;
    });
  });

  describe('transformParticipantsRawData', () => {
    test('should be a function', () => {
      expect(transformParticipantsRawData).to.be.a('function');
    });

    test('should transform correctly form', () => {
      expect(
        transformParticipantsRawData({
          data: participants,
          info: { total_participants: 2 },
        }),
      ).to.be.deep.equal({
        participants,
        totalParticipants: 2,
      });
    });

    test('should return null when participants empty', () => {
      expect(
        transformParticipantsRawData({
          data: {},
          info: { total_participants: 0 },
        }),
      ).to.be.deep.equal({
        participants: null,
        totalParticipants: 0,
      });
    });
  });
});

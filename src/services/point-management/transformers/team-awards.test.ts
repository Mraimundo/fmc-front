import { expect } from 'chai';

import { FetchSubsidiariesRawData } from 'services/point-management/team-awards';
import { transformSubsidiariesRawData } from './team-awards';

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

    it('should be a function', () => {
      expect(transformSubsidiariesRawData).to.be.a('function');
    });

    it('should transform with id and name only', () => {
      expect(transformSubsidiariesRawData(rawSubsidiaries)).to.be.deep.equal([
        { id: 1, name: 'Filial 1' },
        { id: 2, name: 'Filial 2' },
      ]);
    });

    it('should return null when dont have subsidiaries', () => {
      expect(transformSubsidiariesRawData([])).to.be.null;
    });
  });
});

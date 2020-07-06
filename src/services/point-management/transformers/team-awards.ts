import { FetchSubsidiariesRawData } from 'services/point-management/team-awards';
import { Subsidiary } from 'state/modules/point-management/team-awards/types';

export const transformSubsidiariesRawData = (
  subsidiaries: FetchSubsidiariesRawData[],
): Subsidiary[] => subsidiaries.map(({ id, name }) => ({ id, label: name }));

import { FetchSubsidiariesRawData } from 'services/point-management/team-awards';
import { Subsidiary } from 'state/modules/point-management/team-awards/types';

export const transformSubsidiariesRawData = (
  subsidiaries: FetchSubsidiariesRawData[],
): Subsidiary[] | null => {
  const subsidiariesResult = subsidiaries.map(({ id, name }) => ({ id, name }));

  return subsidiariesResult.length > 0 ? subsidiariesResult : null;
};

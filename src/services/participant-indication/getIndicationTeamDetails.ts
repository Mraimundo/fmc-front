import { pluginApi } from 'services/api';

export interface IndicationTeamDetails {
  waiting: number;
  other_status: number;
  active: number;
  total: number;
  active_percentage: number;
}

export default async (
  establishmentId: number,
): Promise<IndicationTeamDetails> => {
  const { data } = await pluginApi.get<IndicationTeamDetails>(
    `participants/indications/details?establishment_id=${establishmentId}`,
  );

  return data;
};

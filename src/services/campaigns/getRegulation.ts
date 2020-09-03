import { pluginApi } from 'services/api';
import {
  Regulation,
  RegulationResponse,
} from 'services/register/regulation/interfaces/IRegulation';

export default async (campaignId: string | number): Promise<Regulation> => {
  const { data } = await pluginApi.get<RegulationResponse>(
    `campaigns/regulation?campaign_id=${campaignId}`,
  );
  return {
    ...data,
    accepted: data.regulation_accepted_logs?.length > 0,
  };
};

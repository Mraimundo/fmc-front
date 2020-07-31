import { pluginApi } from 'services/api';
import { Campaign } from './interfaces/Campaign';
import { CampaignApi } from './interfaces/CampaignApi';
import { campaignApiToCampaign } from './transformers';

export default async (campaignId?: number): Promise<Campaign> => {
  const { data } = await pluginApi.get<CampaignApi>(`campaigns/${campaignId}`);

  return campaignApiToCampaign(data);
};

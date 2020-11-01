import { pluginApi } from 'services/api';
import { CreateNewCampaignDTO } from './dtos';

export default async (data: CreateNewCampaignDTO): Promise<void> => {
  await pluginApi.post('campaigns/save', data);
};

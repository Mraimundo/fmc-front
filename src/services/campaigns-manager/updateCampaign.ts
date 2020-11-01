import { pluginApi } from 'services/api';
import { UpdateCampaignDTO } from './dtos';

export default async (data: UpdateCampaignDTO): Promise<void> => {
  await pluginApi.post(`campaigns/save/${data.id}`, data);
};

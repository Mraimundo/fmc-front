import { pluginApi } from 'services/api';
import { Campaign } from './interfaces';

export default async (): Promise<Campaign[]> => {
  try {
    const { data } = await pluginApi.get('statement/campaigns');
    const { campaigns } = data;
    return campaigns;
  } catch {
    return [];
  }
};

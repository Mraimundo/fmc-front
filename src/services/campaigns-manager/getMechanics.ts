import { pluginApi } from 'services/api';
import { Mechanic } from './interfaces/Campaign';
import { MechanicApi } from './interfaces/CampaignApi';

interface ApiResponse {
  types: MechanicApi[];
}

export default async (): Promise<Mechanic[]> => {
  const {
    data: { types },
  } = await pluginApi.get<ApiResponse>('campaigns/types');
  return types.map(item => ({
    id: item.id,
    name: item.name,
    homeImage: item.picture,
    internalImage: item.secondary_picture,
    emailImage: item.third_picture,
    campaignListImage: item.fourth_picture,
    description: item.description,
    created: item.created,
    materialLink: item.file || '',
  }));
};

import { pluginApi } from 'services/api';
import { Mechanic } from './interfaces/Campaign';

interface MechanicApi {
  id: number;
  name: string;
  picture: string;
  secondary_picture: string;
  third_picture: string;
  fourth_picture: string;
  description: string;
  created: Date;
  modified: Date;
}

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
  }));
};

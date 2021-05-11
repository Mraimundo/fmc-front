import { pluginApi } from 'services/api';
import { Campaign } from './interfaces';


export default async (id: number): Promise<Campaign[]> => {
  const { data } = await pluginApi.get<Campaign[]>(
    `participants/extrato-fmc-coins?campaign_id=${id}`,
  );
  return data;
};

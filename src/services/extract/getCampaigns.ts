import { pluginApi } from 'services/api';
import { Campaign } from './interfaces';

const mock = [
  {
    id: 1,
    description: 'Campanha 1',
    title: 'Campanha 1 title',
  },
  {
    id: 2,
    description: 'Campanha 2',
    title: 'campanha 2 title',
  },
];

export default async (): Promise<Campaign[]> => {
  try {
    const { data } = await pluginApi.get('statement/campaigns');
    const { campaigns } = data;
    return campaigns;
    // return mock;
  } catch {
    return [];
  }
};

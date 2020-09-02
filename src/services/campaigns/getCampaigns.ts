import { pluginApi } from 'services/api';
import { addHours, format } from 'date-fns';

interface CampaignApi {
  id: number;
  fmc_campaign_type: {
    fourth_picture: string;
  };
  name: string;
  start_date: Date;
  end_date: Date;
}

export interface Campaign {
  id: number;
  imageUrl: string;
  title: string;
  startDate: string;
  endDate: string;
}

interface ApiResponse {
  data: CampaignApi[];
}

const transformer = (data: CampaignApi[]): Campaign[] => {
  return data.map(item => ({
    id: item.id,
    imageUrl: item.fmc_campaign_type.fourth_picture,
    title: item.name,
    startDate: format(addHours(new Date(item.start_date), 3), 'dd/MM/yyyy'),
    endDate: format(addHours(new Date(item.end_date), 3), 'dd/MM/yyyy'),
  }));
};

export default async (): Promise<Campaign[]> => {
  const {
    data: { data },
  } = await pluginApi.get<ApiResponse>(
    'participants/campaigns?page=1&limit=100&order=desc',
  );
  return transformer(data);
};

import { pluginApi } from 'services/api';
import { addHours, format } from 'date-fns';
import { formatPoints } from 'util/points';

export interface Campaign {
  id: number;
  imageUrl: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  prizeTitle: string;
  prizeDescription: string;
  products: { id: number; title: string; value: string }[];
  acceptedDate: string;
  signed: boolean;
}

interface CampaignApi {
  id: number;
  name: string;
  fmc_campaign_type: {
    secondary_picture: string;
    description: string;
  };
  start_date: Date;
  end_date: Date;
  reward_name: string;
  reward_description: string;
  participation?: {
    id: number;
    created: Date;
  };
  products: {
    id: number;
    name: string;
    volume: number;
  }[];
  participant_joined_campaign: boolean;
}

const transformer = (data: CampaignApi): Campaign => {
  return {
    id: data.id,
    imageUrl: data.fmc_campaign_type.secondary_picture,
    title: data.name,
    startDate: format(addHours(new Date(data.start_date), 3), 'dd/MM/yyyy'),
    endDate: format(addHours(new Date(data.end_date), 3), 'dd/MM/yyyy'),
    description: data.fmc_campaign_type.description,
    prizeTitle: data.reward_name,
    prizeDescription: data.reward_description,
    products: data.products.map(({ id, name, volume }) => ({
      id,
      title: name,
      value: formatPoints(volume),
    })),
    acceptedDate: data.participation?.id
      ? format(new Date(data.participation.created), 'dd/MM/yyyy')
      : '',
    signed: data.participant_joined_campaign,
  };
};

export default async (campaignId: number): Promise<Campaign> => {
  const { data } = await pluginApi.get<CampaignApi>(
    `participants/campaigns/${campaignId}`,
  );

  return transformer(data);
};

import { pluginApi } from 'services/api';
import { addHours, format } from 'date-fns';
import { fakeFormatDollars } from 'util/points';

export interface Product {
  id: number;
  title: string;
  volume: string;
  sellIn: string;
  sellOut: string;
}

export interface Campaign {
  id: number;
  imageUrl: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  prizeTitle: string;
  prizeDescription: string;
  products: Product[];
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
  description: string;
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
    sellin: number;
    sellout: number;
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
    description: data.description,
    prizeTitle: data.reward_name,
    prizeDescription: data.reward_description,
    products: data.products.map(({ id, name, volume, sellin, sellout }) => ({
      id,
      title: name,
      volume: volume ? `${fakeFormatDollars(volume, 0, 0)} Kg/L` : '',
      sellIn: sellin ? `US$ ${fakeFormatDollars(sellin || 0)}` : '',
      sellOut: sellout ? `US$ ${fakeFormatDollars(sellout || 0)}` : '',
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

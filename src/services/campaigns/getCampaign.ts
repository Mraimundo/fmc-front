import { pluginApi } from 'services/api';
import { addHours, format } from 'date-fns';
import { fakeFormatDollars } from 'util/points';
import { StatusText } from '../campaigns-manager/interfaces/Campaign';

export interface Product {
  id: number;
  title: string;
  volume: string;
  partialVolume: string;
  partialVolumePercentage: string;
  finalVolume: string;
  finalVolumePercentage: string;
  sellIn: string;
  partialSellIn: string;
  partialSellInPercentage: string;
  finalSellIn: string;
  finalSellInPercentage: string;
  sellOut: string;
  partialSellOut: string;
  partialSellOutPercentage: string;
  finalSellOut: string;
  finalSellOutPercentage: string;
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
  status: StatusText;
}

interface CampaignApi {
  id: number;
  name: string;
  status_text: StatusText;
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
    partial_result: {
      volume: number;
      volume_percentage: number;
      sellin: number;
      sellin_percentage: number;
      sellout: number;
      sellout_percentage: number;
    };
    final_result: {
      volume: number;
      volume_percentage: number;
      sellin: number;
      sellin_percentage: number;
      sellout: number;
      sellout_percentage: number;
    };
  }[];
  participant_joined_campaign: boolean;
}

const transformer = (data: CampaignApi): Campaign => {
  return {
    id: data.id,
    imageUrl: data.fmc_campaign_type.secondary_picture,
    title: data.name,
    status: data.status_text,
    startDate: format(addHours(new Date(data.start_date), 3), 'dd/MM/yyyy'),
    endDate: format(addHours(new Date(data.end_date), 3), 'dd/MM/yyyy'),
    description: data.description,
    prizeTitle: data.reward_name,
    prizeDescription: data.reward_description,
    products: data.products.map(
      ({
        id,
        name,
        volume,
        sellin,
        sellout,
        final_result,
        partial_result,
      }) => ({
        id,
        title: name,
        volume: volume ? `${fakeFormatDollars(volume, 0, 0)} Kg/L` : '',
        partialVolume: partial_result?.volume
          ? `${fakeFormatDollars(partial_result.volume, 0, 0)} Kg/L`
          : '',
        partialVolumePercentage: partial_result?.volume_percentage
          ? `${fakeFormatDollars(partial_result.volume, 0, 0)}%`
          : '',
        finalVolume: final_result?.volume
          ? `${fakeFormatDollars(final_result.volume, 0, 0)} Kg/L`
          : '',
        finalVolumePercentage: final_result?.volume_percentage
          ? `${fakeFormatDollars(final_result.volume, 0, 0)}%`
          : '',
        sellIn: sellin ? `US$ ${fakeFormatDollars(sellin || 0)}` : '',
        partialSellIn: partial_result?.sellin
          ? `US$ ${fakeFormatDollars(partial_result.sellin, 0, 0)}`
          : '',
        partialSellInPercentage: partial_result?.sellin_percentage
          ? `${fakeFormatDollars(
              partial_result.sellin_percentage * 100,
              0,
              0,
            )}%`
          : '',
        finalSellIn: final_result?.sellin
          ? `US$ ${fakeFormatDollars(final_result.sellin, 0, 0)}`
          : '',
        finalSellInPercentage: final_result?.sellin_percentage
          ? `${fakeFormatDollars(final_result.sellin_percentage * 100, 0, 0)}%`
          : '',
        sellOut: sellout ? `US$ ${fakeFormatDollars(sellout || 0)}` : '',
        partialSellOut: partial_result?.sellout
          ? `US$ ${fakeFormatDollars(partial_result.sellout, 0, 0)}`
          : '',
        partialSellOutPercentage: partial_result?.sellout_percentage
          ? `${fakeFormatDollars(
              partial_result.sellout_percentage * 100,
              0,
              0,
            )}%`
          : '',
        finalSellOut: final_result?.sellout
          ? `US$ ${fakeFormatDollars(final_result.sellout, 0, 0)}`
          : '',
        finalSellOutPercentage: final_result?.sellout_percentage
          ? `${fakeFormatDollars(final_result.sellout_percentage * 100, 0, 0)}%`
          : '',
      }),
    ),
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

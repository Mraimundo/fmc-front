import { pluginApi } from 'services/api';
import { fakeFormatDollars } from 'util/points';
import { Points } from './interfaces/channel';

export interface ApiResponse {
  marketplace_balance: number;
  seller_distributed_points: number;
  rebate: number;
  channel_points: number;
  fmc_shared_actions: number;
}

const mock = {
  marketplace_balance: 0,
  seller_distributed_points: 0,
  rebate: 0,
  channel_points: 0,
  fmc_shared_actions: 0,
};

const fake = false;

const transformer = (data: ApiResponse): Points => {
  return {
    marketplaceBalance: data.marketplace_balance || 0,
    sellerDistributedPoints: data.seller_distributed_points || 0,
    rebate: data.rebate || 0,
    channelPoints: data.channel_points || 0,
    fmcSharedActions: data.fmc_shared_actions || 0,
    formattedMarketplaceBalance: fakeFormatDollars(data.marketplace_balance || 0),
    formattedSellerDistributedPoints: fakeFormatDollars(
      data.seller_distributed_points || 0,
    ),
    formattedRebate: fakeFormatDollars(data.rebate || 0),
    formattedChannelPoints: fakeFormatDollars(data.channel_points || 0),
    formattedFmcSharedActions: fakeFormatDollars(data.fmc_shared_actions || 0),
  };
};

export default async (establishmentId: number): Promise<Points> => {
  if (fake) {
    return transformer(mock);
  }

  const { data } = await pluginApi.get<ApiResponse>(
    `cockpit/points-statistics?establishment_id=${establishmentId}`,
  );
  return transformer(data);
};

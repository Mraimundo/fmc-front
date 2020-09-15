import { pluginApi } from 'services/api';
import { formatDollars } from 'util/points';
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

const fake = true;

const transformer = (data: ApiResponse): Points => {
  return {
    marketplaceBalance: data.marketplace_balance,
    sellerDistributedPoints: data.seller_distributed_points,
    rebate: data.rebate,
    channelPoints: data.channel_points,
    fmcSharedActions: data.fmc_shared_actions,
    formattedMarketplaceBalance: formatDollars(data.marketplace_balance),
    formattedSellerDistributedPoints: formatDollars(
      data.seller_distributed_points,
    ),
    formattedRebate: formatDollars(data.rebate),
    formattedChannelPoints: formatDollars(data.channel_points),
    formattedFmcSharedActions: formatDollars(data.fmc_shared_actions),
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

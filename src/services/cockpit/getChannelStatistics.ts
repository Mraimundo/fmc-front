import { pluginApi } from 'services/api';
import { fakeFormatDollars } from 'util/points';
import { Statistics } from './interfaces/channel';

export interface ApiResponse {
  establishment: {
    category: string;
    type: string;
    status: string;
    campaign: string;
    name: string;
  };
  participants: {
    active: number;
    precharge: number;
  };
  fmc_shared_actions: {
    balance: number;
  };
}

const transformer = (data: ApiResponse): Statistics => {
  return {
    establishment: {
      ...data.establishment,
    },
    participants: {
      ...data.participants,
      formatedActive: data.participants.active.toString(),
      formatedPrecharge: data.participants.precharge.toString(),
    },
    fmcSharedActions: {
      balance: data.fmc_shared_actions.balance || 0,
      formattedBalance: fakeFormatDollars(data.fmc_shared_actions.balance || 0),
    },
  };
};

export default async (establishmentId: number): Promise<Statistics> => {
  const { data } = await pluginApi.get<ApiResponse>(
    `cockpit/channel-statistics?establishment_id=${establishmentId}`,
  );
  return transformer(data);
};

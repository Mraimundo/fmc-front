import { pluginApi } from 'services/api';
import { formatDollars } from 'util/points';
import { Statistics } from './interfaces/channel';

export interface ApiResponse {
  establishment: {
    category: string;
    type: string;
    status: string;
    campaign: string;
  };
  participants: {
    active: number;
    precharge: number;
  };
  fmc_shared_actions: {
    balance: number;
  };
}

const mock = {
  establishment: {
    category: 'Água',
    type: 'Cooperativa',
    status: 'Ativo',
    campaign: '20/21',
  },
  participants: {
    active: 0,
    precharge: 0,
  },
  fmc_shared_actions: {
    balance: 0,
  },
};

const fake = true;

export interface Filters {
  directorName?: string;
  regionalName?: string;
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
      balance: data.fmc_shared_actions.balance,
      formattedBalance: formatDollars(data.fmc_shared_actions.balance),
    },
  };
};

export default async (establishmentId: number): Promise<Statistics> => {
  if (fake) {
    return transformer(mock);
  }

  const { data } = await pluginApi.get<ApiResponse>(
    `cockpit/channel-statistics?establishment_id=${establishmentId}`,
  );
  return transformer(data);
};

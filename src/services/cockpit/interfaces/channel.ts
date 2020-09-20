export interface Statistics {
  establishment: {
    name: string;
    category: string;
    type: string;
    status: string;
    campaign: string;
  };
  participants: {
    active: number;
    precharge: number;
    formatedActive: string;
    formatedPrecharge: string;
  };
  fmcSharedActions: {
    balance: number;
    formattedBalance: string;
  };
}

export interface Performance {
  revenues: {
    goal: number;
    result: number;
    percentage: number;
    formattedGoal: string;
    formattedResult: string;
    formattedPercentage: string;
  };
  pog: {
    goal: number;
    result: number;
    percentage: number;
    formattedGoal: string;
    formattedResult: string;
    formattedPercentage: string;
  };
  devolutionBelow5Percent: boolean;
  focusProduct: {
    name: string;
    goal: number;
    result: number;
    percentage: number;
    formattedGoal: string;
    formattedResult: string;
    formattedPercentage: string;
    color: string;
    order: number;
  }[];
}

export interface Points {
  marketplaceBalance: number;
  sellerDistributedPoints: number;
  rebate: number;
  channelPoints: number;
  fmcSharedActions: number;
  formattedMarketplaceBalance: string;
  formattedSellerDistributedPoints: string;
  formattedRebate: string;
  formattedChannelPoints: string;
  formattedFmcSharedActions: string;
}

export interface Channel {
  id: number;
  name: string;
  cnpj: string;
}

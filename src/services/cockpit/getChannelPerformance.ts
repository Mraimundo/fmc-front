import { pluginApi } from 'services/api';
import { formatDollars } from 'util/points';
import { Performance } from './interfaces/channel';

export interface ApiResponse {
  revenues: {
    goal: number;
    result: number;
    percentage: number;
  };
  pog: {
    goal: number;
    result: number;
    percentage: number;
  };
  devolution_below_5_percent: boolean;
  focus_product: {
    name: string;
    goal: number;
    result: number;
    percentage: number;
  }[];
}

export interface Filters {
  directorName?: string;
  regionalName?: string;
}

const colors = ['#47C246', '#913944', '#838BC5'];

const transformer = (data: ApiResponse): Performance => {
  return {
    revenues: {
      ...data.revenues,
      formattedGoal: formatDollars(data.revenues.goal),
      formattedResult: formatDollars(data.revenues.result),
      formattedPercentage: formatDollars(data.revenues.percentage),
    },
    pog: {
      ...data.pog,
      formattedGoal: formatDollars(data.pog.goal),
      formattedResult: formatDollars(data.pog.result),
      formattedPercentage: formatDollars(data.pog.percentage),
    },
    devolutionBelow5Percent: true,
    focusProduct: data.focus_product.map((item, index) => ({
      ...item,
      formattedGoal: formatDollars(item.goal),
      formattedResult: formatDollars(item.result),
      formattedPercentage: formatDollars(item.percentage),
      color: colors[index] || '',
    })),
  };
};

export default async (establishmentId: number): Promise<Performance> => {
  const { data } = await pluginApi.get<ApiResponse>(
    `cockpit/performance-statistics?establishment_id=${establishmentId}`,
  );
  return transformer(data);
};

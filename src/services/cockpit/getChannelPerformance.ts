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
const order = ['premio', 'hero', 'talisman'];

const transformer = (data: ApiResponse): Performance => {
  return {
    revenues: {
      ...data.revenues,
      goal: (data.revenues.goal || 0) * 100,
      result: (data.revenues.result || 0) * 100,
      percentage: (data.revenues.percentage || 0) * 100,
      formattedGoal: formatDollars(data.revenues.goal, 0, 0),
      formattedResult: formatDollars(data.revenues.result, 0, 0),
      formattedPercentage: formatDollars((data.revenues.percentage || 0) * 100),
    },
    pog: {
      ...data.pog,
      goal: (data.pog.goal || 0) * 100,
      result: (data.pog.result || 0) * 100,
      percentage: (data.pog.percentage || 0) * 100,
      formattedGoal: formatDollars(data.pog.goal, 0, 0),
      formattedResult: formatDollars(data.pog.result, 0, 0),
      formattedPercentage: formatDollars((data.pog.percentage || 0) * 100),
    },
    devolutionBelow5Percent: data.devolution_below_5_percent,
    focusProduct: data.focus_product
      .map((item, index) => ({
        ...item,
        goal: (item.goal || 0) * 100,
        result: (item.result || 0) * 100,
        percentage: (item.percentage || 0) * 100,
        formattedGoal: formatDollars(item.goal, 0, 0),
        formattedResult: formatDollars(item.result, 0, 0),
        formattedPercentage: formatDollars((item.percentage || 0) * 100),
        color: colors[index] || '',
        order: order.indexOf(item.name.toLowerCase()),
      }))
      .sort((i, j) => (i.order > j.order ? 1 : -1)),
  };
};

export default async (establishmentId: number): Promise<Performance> => {
  const { data } = await pluginApi.get<ApiResponse>(
    `cockpit/performance-statistics?establishment_id=${establishmentId}`,
  );
  const teste = transformer(data);

  console.log('teste', teste);
  return teste;
};

import { pluginApi } from 'services/api';
import { fakeFormatDollars, formatPercent } from 'util/points';
import { Statistics } from './interfaces/general';

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
}

export interface Filters {
  directorName?: string;
  regionalName?: string;
}

const transformer = (data: ApiResponse): Statistics => {
  return {
    revenues: {
      ...data.revenues,
      formattedGoal: fakeFormatDollars(data.revenues.goal, 0, 0),
      formattedResult: fakeFormatDollars(data.revenues.result, 0, 0),
      formattedPercentage: formatPercent(data.revenues.percentage),
    },
    pog: {
      ...data.pog,
      formattedGoal: fakeFormatDollars(data.pog.goal, 0, 0),
      formattedResult: fakeFormatDollars(data.pog.result, 0, 0),
      formattedPercentage: formatPercent(data.pog.percentage),
    },
  };
};

export default async (filters: Filters): Promise<Statistics> => {
  let extraSearch = '';

  if (filters.directorName) {
    extraSearch = `?directorships[0]=${filters.directorName}`;
  }

  if (filters.regionalName) {
    extraSearch += `${extraSearch !== '' ? '&' : '?'}regional[0]=${
      filters.regionalName
    }`;
  }

  const { data } = await pluginApi.get<ApiResponse>(
    `cockpit/general-statistics${extraSearch}`,
  );
  return transformer(data);
};

import { pluginApi } from 'services/api';
import { formatDollars } from 'util/points';
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

const mock = {
  revenues: {
    goal: 1840.67,
    result: 1762.2,
    percentage: 95.73,
  },
  pog: {
    goal: 0,
    result: 0,
    percentage: 0,
  },
};

const fake = true;

export interface Filters {
  directorName?: string;
  regionalName?: string;
}

const transformer = (data: ApiResponse): Statistics => {
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
  };
};

export default async (filters: Filters): Promise<Statistics> => {
  if (fake) {
    return transformer(mock);
  }

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

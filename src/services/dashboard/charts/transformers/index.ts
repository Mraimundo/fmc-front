import { Data } from '..';

export interface Client {
  name: string;
}

interface ChartData {
  labels: string[];
  firstDataBar: number[];
  secondDataBar: number[];
  thirdDataBar: number[];
  title: string;
}

export type ChartName =
  | 'billingRealized'
  | 'pogRealized'
  | 'premioRealized'
  | 'heroRealized'
  | 'talismaRealized';

export interface Charts {
  billingRealized: ChartData;
  pogRealized: ChartData;
  premioRealized: ChartData;
  heroRealized: ChartData;
  talismaRealized: ChartData;
}

type DataColumnName =
  | 'billing_goal'
  | 'billing_result'
  | 'billing_percentage'
  | 'pog_goal'
  | 'pog_result'
  | 'pog_percentage'
  | 'premio_goal'
  | 'premio_result'
  | 'premio_percentage'
  | 'hero_goal'
  | 'hero_result'
  | 'hero_percentage'
  | 'talisman_goal'
  | 'talisman_result'
  | 'talisman_percentage';

const getDataLabels = (data: Data[], filter?: Client[]): string[] => {
  if (filter) {
    return filter.map(item => item.name);
  }

  return data.map(item => item.client_group);
};

const getDataNumbers = (data: Data[], columnName: DataColumnName): number[] => {
  return data.map(item => item[columnName]);
};

const getClients = (data: Data[]): Client[] => {
  return data
    .map(item => ({ name: item.client_group }))
    .sort((a, b) => (a.name > b.name ? 1 : -1));
};

const getCharts = (data: Data[], filter?: Client[]): Charts => {
  const labels = getDataLabels(data, filter);
  const filteredData = data.filter(
    item => labels.indexOf(item.client_group) >= 0,
  );

  return {
    billingRealized: {
      labels,
      firstDataBar: getDataNumbers(filteredData, 'billing_goal'),
      secondDataBar: getDataNumbers(filteredData, 'billing_result'),
      thirdDataBar: getDataNumbers(filteredData, 'billing_percentage'),
      title: 'Faturamento (US$)',
    },
    pogRealized: {
      labels,
      firstDataBar: getDataNumbers(filteredData, 'pog_goal'),
      secondDataBar: getDataNumbers(filteredData, 'pog_result'),
      thirdDataBar: getDataNumbers(filteredData, 'pog_percentage'),
      title: 'POG (US$)',
    },
    premioRealized: {
      labels,
      firstDataBar: getDataNumbers(filteredData, 'premio_goal'),
      secondDataBar: getDataNumbers(filteredData, 'premio_result'),
      thirdDataBar: getDataNumbers(filteredData, 'premio_percentage'),
      title: 'PREMIO (L)',
    },
    heroRealized: {
      labels,
      firstDataBar: getDataNumbers(filteredData, 'hero_goal'),
      secondDataBar: getDataNumbers(filteredData, 'hero_result'),
      thirdDataBar: getDataNumbers(filteredData, 'hero_percentage'),
      title: 'HERO (L)',
    },
    talismaRealized: {
      labels,
      firstDataBar: getDataNumbers(filteredData, 'talisman_goal'),
      secondDataBar: getDataNumbers(filteredData, 'talisman_result'),
      thirdDataBar: getDataNumbers(filteredData, 'talisman_percentage'),
      title: 'TALISMAN (L)',
    },
  };
};

export { getClients, getCharts };

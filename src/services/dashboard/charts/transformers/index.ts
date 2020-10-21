import { Data } from '..';

export interface Client {
  name: string;
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

interface ChartData {
  labels: string[];
  dataset: {
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    label?: string;
    visible?: boolean;
  }[];
  title: string;
  divideValueBy?: number;
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

const getDataLabels = (data: Data[], filter?: Client[]): string[] => {
  if (filter) {
    return data
      .filter(item => !!filter.find(i => i.name === item.name))
      .map(item => item.name);
  }

  return data.map(item => item.name);
};

const getDataNumbers = (data: Data[], columnName: DataColumnName): number[] => {
  return data.map(item => item[columnName]);
};

const getClients = (data: Data[]): Client[] => {
  return data.map(item => ({ name: item.name }));
};

const getCharts = (data: Data[], filter?: Client[]): Charts => {
  const labels = getDataLabels(data, filter);
  const filteredData = data.filter(item => labels.indexOf(item.name) >= 0);

  return {
    billingRealized: {
      labels,
      dataset: [
        {
          data: getDataNumbers(filteredData, 'billing_goal'),
          backgroundColor: '#CDD6E1',
          borderColor: '#2464A3',
          borderWidth: 1,
          label: 'Meta',
        },
        {
          data: getDataNumbers(filteredData, 'billing_result'),
          backgroundColor: '#FF6565',
          borderColor: '#A32B2B',
          borderWidth: 1,
          label: 'Realizado',
        },
        {
          data: getDataNumbers(filteredData, 'billing_percentage'),
          visible: false,
        },
      ],
      title: 'Faturamento (MM US$)',
      divideValueBy: 1000,
    },
    pogRealized: {
      labels,
      dataset: [
        {
          data: getDataNumbers(filteredData, 'pog_goal'),
          backgroundColor: '#CDD6E1',
          borderColor: '#2464A3',
          borderWidth: 1,
          label: 'Meta',
        },
        {
          data: getDataNumbers(filteredData, 'pog_result'),
          backgroundColor: '#FF6565',
          borderColor: '#A32B2B',
          borderWidth: 1,
          label: 'Realizado',
        },
        {
          data: getDataNumbers(filteredData, 'pog_percentage'),
          visible: false,
        },
      ],
      title: 'POG (MM US$)',
      divideValueBy: 1000,
    },
    premioRealized: {
      labels,
      dataset: [
        {
          data: getDataNumbers(filteredData, 'premio_goal'),
          backgroundColor: '#EAEAEA',
          borderColor: '#B4B4B4',
          borderWidth: 1,
          label: 'Meta',
        },
        {
          data: getDataNumbers(filteredData, 'premio_result'),
          backgroundColor: '#EC959F',
          borderColor: '#913944',
          borderWidth: 1,
          label: 'Realizado',
        },
        {
          data: getDataNumbers(filteredData, 'premio_percentage'),
          visible: false,
        },
      ],
      title: 'PREMIO<span>®</span> (L)',
    },
    heroRealized: {
      labels,
      dataset: [
        {
          data: getDataNumbers(filteredData, 'hero_goal'),
          backgroundColor: '#EAEAEA',
          borderColor: '#B4B4B4',
          borderWidth: 1,
          label: 'Meta',
        },
        {
          data: getDataNumbers(filteredData, 'hero_result'),
          backgroundColor: '#C1F7D2',
          borderColor: '#47C246',
          borderWidth: 1,
          label: 'Realizado',
        },
        {
          data: getDataNumbers(filteredData, 'hero_percentage'),
          visible: false,
        },
      ],
      title: 'HERO<span>®</span> (L)',
    },
    talismaRealized: {
      labels,
      dataset: [
        {
          data: getDataNumbers(filteredData, 'talisman_goal'),
          backgroundColor: '#EAEAEA',
          borderColor: '#B4B4B4',
          borderWidth: 1,
          label: 'Meta',
        },
        {
          data: getDataNumbers(filteredData, 'talisman_result'),
          backgroundColor: '#B5BDF3',
          borderColor: '#838BC5',
          borderWidth: 1,
          label: 'Realizado',
        },
        {
          data: getDataNumbers(filteredData, 'talisman_percentage'),
          visible: false,
        },
      ],
      title: 'TALISMAN<span>®</span> (L)',
    },
  };
};

export { getClients, getCharts };

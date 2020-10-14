import { pluginApi } from 'services/api';

export interface Data {
  client_group: string;
  billing_goal: number;
  billing_result: number;
  billing_percentage: number;
  pog_goal: number;
  pog_result: number;
  pog_percentage: number;
  premio_goal: number;
  premio_result: number;
  premio_percentage: number;
  hero_goal: number;
  hero_result: number;
  hero_percentage: number;
  talisman_goal: number;
  talisman_result: number;
  talisman_percentage: number;
}

interface ApiResponse {
  data: Data[];
}

const mock: ApiResponse = {
  data: [
    {
      client_group: 'GERAIS AGRO',
      billing_goal: 523575.63,
      billing_result: 289393.85,
      billing_percentage: 55,
      pog_goal: 647825.63,
      pog_result: -99146.52,
      pog_percentage: -15.3,
      premio_goal: 300,
      premio_result: 155,
      premio_percentage: 51.7,
      hero_goal: 1000.0,
      hero_result: 500.0,
      hero_percentage: 50.0,
      talisman_goal: 9000.0,
      talisman_result: -91.0,
      talisman_percentage: -1.0,
    },
    {
      client_group: 'SYNAGRO',
      billing_goal: 1947205.56,
      billing_result: 281189.85,
      billing_percentage: 14.0,
      pog_goal: 1077950,
      pog_result: 107499.48,
      pog_percentage: 10.0,
      premio_goal: 1000,
      premio_result: 0,
      premio_percentage: 0.0,
      hero_goal: 800.0,
      hero_result: 0.0,
      hero_percentage: 0.0,
      talisman_goal: 17500.0,
      talisman_result: 0.0,
      talisman_percentage: 0.0,
    },
  ],
};

const getChartsData = async (): Promise<Data[]> => {
  const {
    data: { data },
  } = await pluginApi.get<ApiResponse>('dashboards/performance');

  return data;
};

export { getChartsData };

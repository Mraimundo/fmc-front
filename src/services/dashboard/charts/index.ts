import { pluginApi } from 'services/api';

export interface Data {
  client_code: string;
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
      client_code: 'AGROSHOPPING',
      billing_goal: 125590000,
      billing_result: 75250000,
      billing_percentage: 30,
      pog_goal: 1691773.1,
      pog_result: 1691773.1,
      pog_percentage: 43.04,
      premio_goal: 1079.0,
      premio_result: 162.0,
      premio_percentage: 15.01,
      hero_goal: 15000.0,
      hero_result: 1885.0,
      hero_percentage: 12.57,
      talisman_goal: 3000.0,
      talisman_result: 10.0,
      talisman_percentage: 0.33,
    },
    {
      client_code: 'LEMEFERTIL',
      billing_goal: 125590000,
      billing_result: 75250000,
      billing_percentage: 30,
      pog_goal: 1691773.1,
      pog_result: 1691773.1,
      pog_percentage: 43.04,
      premio_goal: 1079.0,
      premio_result: 162.0,
      premio_percentage: 15.01,
      hero_goal: 15000.0,
      hero_result: 1885.0,
      hero_percentage: 12.57,
      talisman_goal: 3000.0,
      talisman_result: 10.0,
      talisman_percentage: 0.33,
    },
    {
      client_code: 'AGROAMAZONIA',
      billing_goal: 125590000,
      billing_result: 75250000,
      billing_percentage: 30,
      pog_goal: 1691773.1,
      pog_result: 1691773.1,
      pog_percentage: 43.04,
      premio_goal: 1079.0,
      premio_result: 162.0,
      premio_percentage: 15.01,
      hero_goal: 15000.0,
      hero_result: 1885.0,
      hero_percentage: 12.57,
      talisman_goal: 3000.0,
      talisman_result: 10.0,
      talisman_percentage: 0.33,
    },
    {
      client_code: 'UNICERES',
      billing_goal: 125590000,
      billing_result: 75250000,
      billing_percentage: 30,
      pog_goal: 1691773.1,
      pog_result: 1691773.1,
      pog_percentage: 43.04,
      premio_goal: 1079.0,
      premio_result: 162.0,
      premio_percentage: 15.01,
      hero_goal: 15000.0,
      hero_result: 1885.0,
      hero_percentage: 12.57,
      talisman_goal: 3000.0,
      talisman_result: 10.0,
      talisman_percentage: 0.33,
    },
    {
      client_code: 'DOMENE',
      billing_goal: 125590000,
      billing_result: 75250000,
      billing_percentage: 30,
      pog_goal: 1691773.1,
      pog_result: 1691773.1,
      pog_percentage: 43.04,
      premio_goal: 1079.0,
      premio_result: 162.0,
      premio_percentage: 15.01,
      hero_goal: 15000.0,
      hero_result: 1885.0,
      hero_percentage: 12.57,
      talisman_goal: 3000.0,
      talisman_result: 10.0,
      talisman_percentage: 0.33,
    },
    {
      client_code: 'AGROSHOPPING2',
      billing_goal: 125590000,
      billing_result: 75250000,
      billing_percentage: 30,
      pog_goal: 1691773.1,
      pog_result: 1691773.1,
      pog_percentage: 43.04,
      premio_goal: 1079.0,
      premio_result: 162.0,
      premio_percentage: 15.01,
      hero_goal: 15000.0,
      hero_result: 1885.0,
      hero_percentage: 12.57,
      talisman_goal: 3000.0,
      talisman_result: 10.0,
      talisman_percentage: 0.33,
    },
  ],
};

const getChartsData = async (): Promise<Data[]> => {
  const { data } = mock;

  return data;
};

export { getChartsData };

import { pluginApi } from 'services/api';
import { ApproverProfile, RTC, KAM } from 'config/constants';

interface DefaultResponse {
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

interface CustomResponse extends Omit<DefaultResponse, 'client_group'> {
  rtc_name: string;
}

export interface Data extends Omit<DefaultResponse, 'client_group'> {
  name: string;
}

const orderByName = (data: Data[]): Data[] => {
  return data.sort((a, b) => (a.name > b.name ? 1 : -1));
};

const getChartsData = async (profile: ApproverProfile): Promise<Data[]> => {
  if (profile === RTC || profile === KAM) {
    const {
      data: { data },
    } = await pluginApi.get<{ data: DefaultResponse[] }>(
      'dashboards/performance',
    );
    return orderByName(
      data.map(item => ({ ...item, name: item.client_group })),
    );
  }

  const {
    data: { data },
  } = await pluginApi.get<{ data: CustomResponse[] }>(
    'dashboards/team-performance',
  );
  return orderByName(data.map(item => ({ ...item, name: item.rtc_name })));
};

export { getChartsData };

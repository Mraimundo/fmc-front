import { pluginApi } from 'services/api';
import {
  CAMPAIGN_STATUS,
  CAMPAIGN_STATUS_TEXT,
  CampaignStatus,
} from './interfaces/Campaign';
import getPtStatus from './util/getPtStatusText';

export interface Response {
  status: CampaignStatus;
  count: number;
}

interface ApiResponse {
  under_analysis: number;
  on_approval: number;
  published: number;
  canceled: number;
  completed: number;
}

export default async (): Promise<Response[]> => {
  /* ?status[0]=published&establishments[0]=1&types[0]=1&regional[0]=Arroz&directorships[0]=Sul&participants[0]=1 */
  const { data } = await pluginApi.get<ApiResponse>('campaigns/details');

  return [
    {
      status: {
        id: CAMPAIGN_STATUS.BUILDING,
        statusText: CAMPAIGN_STATUS_TEXT.UNDER_ANALYSIS,
        name: getPtStatus(CAMPAIGN_STATUS_TEXT.UNDER_ANALYSIS),
      },
      count: data.under_analysis,
    },
    {
      status: {
        id: CAMPAIGN_STATUS.WAITING_APPROVAL,
        statusText: CAMPAIGN_STATUS_TEXT.ON_APPROVAL,
        name: getPtStatus(CAMPAIGN_STATUS_TEXT.ON_APPROVAL),
      },
      count: data.on_approval,
    },
    {
      status: {
        id: CAMPAIGN_STATUS.ACTIVE,
        statusText: CAMPAIGN_STATUS_TEXT.PUBLISHED,
        name: getPtStatus(CAMPAIGN_STATUS_TEXT.PUBLISHED),
      },
      count: data.published,
    },
    {
      status: {
        id: CAMPAIGN_STATUS.CANCELED,
        statusText: CAMPAIGN_STATUS_TEXT.CANCELED,
        name: getPtStatus(CAMPAIGN_STATUS_TEXT.CANCELED),
      },
      count: data.canceled,
    },
    {
      status: {
        id: CAMPAIGN_STATUS.ACTIVE,
        statusText: CAMPAIGN_STATUS_TEXT.COMPLETED,
        name: getPtStatus(CAMPAIGN_STATUS_TEXT.COMPLETED),
      },
      count: data.completed,
    },
  ];
};

import {
  CAMPAIGN_STATUS,
  CAMPAIGN_STATUS_TEXT,
  CampaignStatus,
} from './interfaces/Campaign';
import getPtStatusText from './util/getPtStatusText';

const data: CampaignStatus[] = [
  {
    id: CAMPAIGN_STATUS.ACTIVE,
    statusText: CAMPAIGN_STATUS_TEXT.PUBLISHED,
    name: getPtStatusText(CAMPAIGN_STATUS_TEXT.PUBLISHED),
  },
  {
    id: CAMPAIGN_STATUS.ACTIVE,
    statusText: CAMPAIGN_STATUS_TEXT.COMPLETED,
    name: getPtStatusText(CAMPAIGN_STATUS_TEXT.COMPLETED),
  },
  {
    id: CAMPAIGN_STATUS.BUILDING,
    statusText: CAMPAIGN_STATUS_TEXT.UNDER_ANALYSIS,
    name: getPtStatusText(CAMPAIGN_STATUS_TEXT.UNDER_ANALYSIS),
  },
  {
    id: CAMPAIGN_STATUS.CANCELED,
    statusText: CAMPAIGN_STATUS_TEXT.CANCELED,
    name: getPtStatusText(CAMPAIGN_STATUS_TEXT.CANCELED),
  },
  {
    id: CAMPAIGN_STATUS.WAITING_APPROVAL,
    statusText: CAMPAIGN_STATUS_TEXT.ON_APPROVAL,
    name: getPtStatusText(CAMPAIGN_STATUS_TEXT.ON_APPROVAL),
  },
];

export default async (): Promise<CampaignStatus[]> => {
  return data;
};

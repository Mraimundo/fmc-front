import {
  Campaign,
  CAMPAIGN_STATUS,
  CAMPAIGN_STATUS_TEXT,
} from './interfaces/Campaign';
import getPtStatus from './util/getPtStatusText';

export default (): Campaign => {
  return {
    id: null,
    title: '',
    description: '',
    mechanic: null,
    audience: [],
    startDate: null,
    endDate: null,
    prize: {
      description: '',
      name: '',
    },
    affordPoints: 0,
    complementaryAffordPoints: 0,
    complementaryLocalBudget: 0,
    complementaryCrmBudget: 0,
    expectedSellIn: 0,
    expectedSellOut: 0,
    goals: [],
    observation: '',
    status: {
      id: CAMPAIGN_STATUS.BUILDING,
      name: getPtStatus(CAMPAIGN_STATUS_TEXT.UNDER_ANALYSIS),
      statusText: CAMPAIGN_STATUS_TEXT.UNDER_ANALYSIS,
    },
    createdAt: null,
  };
};

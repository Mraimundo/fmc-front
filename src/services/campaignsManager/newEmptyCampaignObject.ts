import { Campaign, CAMPAIGN_STATUS } from './interfaces/Campaign';

export default (): Campaign => {
  return {
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
    status: CAMPAIGN_STATUS.BUILDING,
  };
};

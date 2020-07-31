import { Campaign } from '../interfaces/Campaign';
import { CampaignApi } from '../interfaces/CampaignApi';
import getPtStatus from '../util/getPtStatusText';

export default (campaignApi: CampaignApi): Campaign => ({
  id: campaignApi.id,
  title: campaignApi.name,
  description: campaignApi.description,
  startDate: campaignApi.start_date,
  endDate: campaignApi.end_date,
  createdAt: campaignApi.created,
  affordPoints: campaignApi.points,
  complementaryAffordPoints: campaignApi.complementary_points,
  complementaryLocalBudget: campaignApi.local_points,
  complementaryCrmBudget: campaignApi.crm_points,
  expectedSellIn: campaignApi.sell_in_result,
  expectedSellOut: campaignApi.sell_out_result,
  observation: campaignApi.observation,
  status: {
    id: campaignApi.status,
    name: getPtStatus(campaignApi.status_text),
    statusText: campaignApi.status_text,
  },
  goals: campaignApi.products.map(product => ({
    product: {
      id: product.id,
      name: product.name,
    },
    expectedVolume: product.volume,
  })),
  mechanic: {
    id: campaignApi.fmc_campaign_type.id,
    name: campaignApi.fmc_campaign_type.name,
    homeImage: campaignApi.fmc_campaign_type.picture,
    internalImage: campaignApi.fmc_campaign_type.secondary_picture,
    emailImage: campaignApi.fmc_campaign_type.third_picture,
    campaignListImage: campaignApi.fmc_campaign_type.fourth_picture,
    description: campaignApi.fmc_campaign_type.description,
    created: campaignApi.fmc_campaign_type.created,
  },
  audience: campaignApi.establishments.map(customer => ({
    customer: {
      id: customer.id,
      name: customer.name,
      cnpj: customer.cnpj,
    },
    balance: customer.balance,
  })),
  prize: {
    description: campaignApi.reward_description,
    name: campaignApi.reward_name,
  },
});

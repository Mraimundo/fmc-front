import { formatDate } from 'util/datetime';
import { Campaign } from '../interfaces/Campaign';
import { CreateNewCampaignDTO } from '../dtos';

export default (data: Campaign): CreateNewCampaignDTO => {
  return {
    name: data.title,
    description: data.description,
    reward_description: data.prize.description,
    reward_name: data.prize.name,
    observation: data.observation,
    start_date: formatDate(data.startDate),
    end_date: formatDate(data.endDate),
    fmc_campaign_type_id: data.mechanic.id,
    use_points: data.affordPoints > 0,
    points: data.affordPoints,
    use_complementary_points: data.complementaryAffordPoints > 0,
    complementary_points: data.complementaryAffordPoints,
    use_local_points: data.complementaryLocalBudget > 0,
    local_points: data.complementaryLocalBudget,
    use_crm_points: data.complementaryCrmBudget > 0,
    crm_points: data.complementaryCrmBudget,
    sell_in_result: data.expectedSellIn,
    sell_out_result: data.expectedSellOut,
    establishments: data.customers.map(item => item.id),
    products: data.goals.map(item => ({
      id: item.product.id,
      volume: item.expectedVolume,
    })),
  };
};

import { Campaign } from '../interfaces/Campaign';
import { UpdateCampaignDTO } from '../dtos';
import createDto from './campaignToCreateNewCampaignDTO';

export default (data: Campaign): UpdateCampaignDTO => {
  if (!data.id) {
    throw new Error('Id not provided');
  }
  return {
    ...createDto(data),
    id: data.id,
  };
};

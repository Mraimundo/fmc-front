import newEmptyCampaign from 'services/campaignsManager/newEmptyCampaignObject';
import { StoreState } from '../root-reducer';
import pointManagement from './point-management/mock';

const state: StoreState = {
  pointManagement,
  campaignsManager: { campaign: newEmptyCampaign() },
};

export default state;

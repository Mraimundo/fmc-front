import newEmptyCampaign from 'services/campaignsManager/newEmptyCampaignObject';
import { StoreState } from '../root-reducer';
import pointManagement from './point-management/mock';
import header from './header/mock';
import home from './home/mock';

const state: StoreState = {
  pointManagement,
  campaignsManager: { campaign: newEmptyCampaign(), canEdit: true },
  header,
  home,
};

export default state;

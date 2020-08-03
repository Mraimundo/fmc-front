import { combineReducers } from 'redux';

import pointManagement, {
  PointManagementState,
} from './modules/point-management/reducer';
import header, { HeaderState } from './modules/header/reducer';
import home, { HomeState } from './modules/home/reducer';
import campaignsManager, {
  CampaignsManagerState,
} from './modules/campaigns-manager/reducer';

export type StoreState = {
  pointManagement: PointManagementState;
  campaignsManager: CampaignsManagerState;
  header: HeaderState;
  home: HomeState;
};

export default combineReducers<StoreState>({
  pointManagement,
  campaignsManager,
  header,
  home,
});

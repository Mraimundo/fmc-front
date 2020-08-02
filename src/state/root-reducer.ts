import { combineReducers } from 'redux';

import pointManagement, {
  PointManagementState,
} from './modules/point-management/reducer';

import campaignsManager, {
  CampaignsManagerState,
} from './modules/campaigns-manager/reducer';

export type StoreState = {
  pointManagement: PointManagementState;
  campaignsManager: CampaignsManagerState;
};

export default combineReducers<StoreState>({
  pointManagement,
  campaignsManager,
});

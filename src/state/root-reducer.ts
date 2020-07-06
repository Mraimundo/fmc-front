import { combineReducers } from 'redux';

import pointManagement, {
  PointManagementState,
} from './modules/point-management/reducer';

export type StoreState = {
  pointManagement: PointManagementState;
};

export default combineReducers<StoreState>({
  pointManagement,
});

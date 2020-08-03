import { combineReducers } from 'redux';

import pointManagement, {
  PointManagementState,
} from './modules/point-management/reducer';
import header, { HeaderState } from './modules/header/reducer';
import home, { HomeState } from './modules/home/reducer';

export interface StoreState {
  pointManagement: PointManagementState;
  header: HeaderState;
  home: HomeState;
}

export default combineReducers<StoreState>({
  pointManagement,
  header,
  home,
});

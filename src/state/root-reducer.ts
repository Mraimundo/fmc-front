import { combineReducers } from 'redux';

import pointManagement, {
  PointManagementState,
} from './modules/point-management/reducer';
import header, { HeaderState } from './modules/header/reducer';
import home, { HomeState } from './modules/home/reducer';
import campaignsManager, {
  CampaignsManagerState,
} from './modules/campaigns-manager/reducer';
import goals, { GoalsState } from './modules/goals/reducer';
import pointsSimulator from './modules/points-simulator/reducer';
import { PointsSimulatorState } from './modules/points-simulator/interfaces';
import weather, { WeatherState } from './modules/weather/reducer';
import answerReducer from './modules/answer/reducer';
// import { SurveyQuetionState } from './modules/answer/actions';

export type StoreState = {
  pointManagement: PointManagementState;
  campaignsManager: CampaignsManagerState;
  header: HeaderState;
  home: HomeState;
  goals: GoalsState;
  pointsSimulator: PointsSimulatorState;
  weather: WeatherState;
  answerReducer: any;
};

export default combineReducers<StoreState>({
  pointManagement,
  campaignsManager,
  header,
  home,
  goals,
  pointsSimulator,
  weather,
  answerReducer,
});

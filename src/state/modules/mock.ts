import { StoreState } from '../root-reducer';
import pointManagement from './point-management/mock';
import header from './header/mock';
import home from './home/mock';
import campaignsManager from './campaigns-manager/mock';
import goals from './goals/mock';
import pointsSimulator from './points-simulator/mock';
import weather from './weather/mock';
import answerReducer from './answer/mock';


const state: StoreState = {
  pointManagement,
  campaignsManager,
  header,
  home,
  goals,
  pointsSimulator,
  weather,
  answerReducer,
};

export default state;

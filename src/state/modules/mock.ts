import { StoreState } from '../root-reducer';
import pointManagement from './point-management/mock';
import header from './header/mock';
import home from './home/mock';
import campaignsManager from './campaigns-manager/mock';
import goals from './goals/mock';
import pointsSimulator from './points-simulator/mock';

const state: StoreState = {
  pointManagement,
  campaignsManager,
  header,
  home,
  goals,
  pointsSimulator,
};

export default state;

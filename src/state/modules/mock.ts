import { StoreState } from '../root-reducer';
import pointManagement from './point-management/mock';
import header from './header/mock';
import home from './home/mock';

const state: StoreState = {
  pointManagement,
  header,
  home,
};

export default state;

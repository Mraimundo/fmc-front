import { DefaultTheme } from 'styled-components';

import contact from './modules/contact/default';
import indication from './modules/indication/default';
import input from './modules/input/default';
import layout from './modules/layout/default';
import link from './modules/link/default';
import modal from './modules/modal/default';
import regulation from './modules/regulation/default';
import table from './modules/table/default';
import tabMenu from './modules/tab-menu/default';
import tooltip from './modules/tooltip/default';

import accordion from './modules/accordion/producer';
import button from './modules/button/producer';
import font from './modules/font/producer';
import footer from './modules/footer/producer';
import howParticipate from './modules/how-participate/producer';
import menu from './modules/menu/producer';

const Theme: DefaultTheme = {
  accordion,
  button,
  indication,
  contact,
  font,
  footer,
  howParticipate,
  input,
  layout,
  link,
  menu,
  modal,
  regulation,
  table,
  tabMenu,
  tooltip,
};

export default Theme;

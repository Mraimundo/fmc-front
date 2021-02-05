import { DefaultTheme } from 'styled-components';
import contact from './modules/contact/default';
import indication from './modules/indication/default';
import howParticipate from './modules/how-participate/default';
import layout from './modules/layout/default';
import link from './modules/link/default';
import modal from './modules/modal/default';
import regulation from './modules/regulation/default';
import tabMenu from './modules/tab-menu/default';
import tooltip from './modules/tooltip/default';

import accordion from './modules/accordion/cooperative';
import button from './modules/button/cooperative';
import font from './modules/font/cooperative';
import footer from './modules/footer/cooperative';
import input from './modules/input/cooperative';
import menu from './modules/menu/cooperative';
import table from './modules/table/cooperative';

const Theme: DefaultTheme = {
  accordion,
  button,
  indication,
  contact,
  font,
  footer,
  input,
  howParticipate,
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

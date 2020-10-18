import { DefaultTheme } from 'styled-components';
import accordion from './modules/accordion/default';
import footer from './modules/footer/default';
import indication from './modules/indication/default';
import howParticipate from './modules/howParticipate/default';
import layout from './modules/layout/default';
import regulation from './modules/regulation/default';
import table from './modules/table/default';
import tooltip from './modules/tooltip/default';

import button from './modules/button/disconnected';
import contact from './modules/contact/disconnected';
import font from './modules/font/disconnected';
import input from './modules/input/disconnected';
import link from './modules/link/disconnected';
import menu from './modules/menu/disconnected';
import modal from './modules/modal/disconnected';
import tabMenu from './modules/tabMenu/disconnected';

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

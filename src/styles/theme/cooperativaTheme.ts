import { DefaultTheme } from 'styled-components';
import contact from './modules/contact/default';
import indication from './modules/indication/default';
import howParticipate from './modules/howParticipate/default';
import layout from './modules/layout/default';
import link from './modules/link/default';
import modal from './modules/modal/default';
import regulation from './modules/regulation/default';
import tabMenu from './modules/tabMenu/default';
import tooltip from './modules/tooltip/default';

import accordion from './modules/accordion/cooperativa';
import button from './modules/button/cooperativa';
import font from './modules/font/cooperativa';
import footer from './modules/footer/cooperativa';
import input from './modules/input/cooperativa';
import menu from './modules/menu/cooperativa';
import table from './modules/table/cooperativa';

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

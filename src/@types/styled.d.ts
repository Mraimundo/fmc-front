import 'styled-components';

import Accordion from './styled/modules/accordion';
import Button from './styled/modules/button';
import Contact from './styled/modules/contact';
import Font from './styled/modules/font';
import Footer from './styled/modules/footer';
import HowParticipate from './styled/modules/how-participate';
import Indication from './styled/modules/indication';
import Input from './styled/modules/input';
import Layout from './styled/modules/layout';
import Link from './styled/modules/link';
import Menu from './styled/modules/menu';
import Modal from './styled/modules/modal';
import Regulation from './styled/modules/regulation';
import Table from './styled/modules/table';
import TabMenu from './styled/modules/tab-menu';
import Tooltip from './styled/modules/tooltip';

declare module 'styled-components' {
  export interface DefaultTheme {
    accordion: Accordion;
    button: Button;
    contact: Contact;
    font: Font;
    footer: Footer;
    howParticipate: HowParticipate;
    indication: Indication;
    input: Input;
    layout: Layout;
    link: Link;
    menu: Menu;
    modal: Modal;
    regulation: Regulation;
    table: Table;
    tabMenu: TabMenu;
    tooltip: Tooltip;
  }
}

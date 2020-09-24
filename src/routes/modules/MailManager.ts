import MailManager from 'pages/MailManager';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: '/mail-manager',
    component: MailManager,
    accessPage: 'MailManager',
  },
];

export default routes;

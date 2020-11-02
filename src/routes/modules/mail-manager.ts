import MailManager from 'pages/MailManager';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: '/mail-manager',
    component: MailManager,
    accessPage: 'MailManager',
  },
];

export default routes;

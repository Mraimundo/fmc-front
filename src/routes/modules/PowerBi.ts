import PowerBi from 'pages/PowerBi';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: '/power-bi',
    component: PowerBi,
    accessPage: 'PowerBi',
  },
];

export default routes;

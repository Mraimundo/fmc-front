import PowerBi from 'pages/PowerBi';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: '/power-bi',
    component: PowerBi,
    accessPage: 'PowerBi',
  },
];

export default routes;

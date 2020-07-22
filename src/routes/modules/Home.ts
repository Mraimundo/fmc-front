import Dashboard from 'pages/Dashboard';
import Dashboard2 from 'pages/Dashboard2';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: '/dashboard',
    component: Dashboard,
    accessPage: 'Home',
  },
  {
    path: '/dashboard2',
    component: Dashboard2,
    accessPage: 'Home 2',
  },
];

export default routes;

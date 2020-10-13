import Home from 'pages/Home';
import Dash from 'pages/Dashboard';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: '/home',
    component: Home,
    accessPage: 'Home',
  },
];

export default routes;

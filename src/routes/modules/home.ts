import Home from 'pages/Home';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: '/home',
    component: Home,
    accessPage: 'Home',
  },
];

export default routes;

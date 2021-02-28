import routeMap from 'routes/route-map';
import FlyingHigh from 'pages/FlyingHigh';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.flyingHigh,
    component: FlyingHigh,
    accessPage: 'Campanha Voando Alto',
    isPublic: true,
  },
];

export default routes;

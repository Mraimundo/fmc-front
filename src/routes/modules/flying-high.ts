import routeMap from 'routes/route-map';
import FlyingHigh from 'pages/FlyingHigh/internal';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.flyingHigh.internal,
    component: FlyingHigh,
    accessPage: 'Campanha Voando Alto',
  },
];

export default routes;

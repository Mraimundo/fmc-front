import routeMap from 'routes/route-map';
import FlyingHigh from 'pages/FlyingHigh/public';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.flyingHigh.public,
    component: FlyingHigh,
    accessPage: 'Campanha Voando Alto (Público)',
    isPublic: true,
  }
];

export default routes;

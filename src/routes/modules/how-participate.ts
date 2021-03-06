import routeMap from 'routes/route-map';
import HowParticipate from 'pages/HowParticipate';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: `${routeMap.howParticipate}`,
    component: HowParticipate,
    accessPage: 'Página de Como participar',
  },
];

export default routes;

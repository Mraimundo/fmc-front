import routeMap from 'routes/route-map';
import Faq from 'pages/Faq';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: routeMap.faq,
    component: Faq,
    accessPage: 'Página de faq',
  },
];

export default routes;

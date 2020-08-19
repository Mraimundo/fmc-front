import routeMap from 'routes/route-map';
import Contact from 'pages/Contact';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: routeMap.contact,
    component: Contact,
    accessPage: 'Página fale conosco',
  },
];

export default routes;

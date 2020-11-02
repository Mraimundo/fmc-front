import Gallery from 'pages/Gallery/List';
import routeMap from 'routes/route-map';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.gallery,
    component: Gallery,
    accessPage: 'Página galeria',
  },
];

export default routes;

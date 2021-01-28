import routeMap from 'routes/route-map';
import CatalogoPiComponent from 'pages/CatalogoPi';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.catalogoPi,
    component: CatalogoPiComponent,
    accessPage: 'Catálogo de Prêmios',
  },
];

export default routes;

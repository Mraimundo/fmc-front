import routeMap from 'routes/route-map';
import Products from 'pages/Products';
import { RouteModule } from './route-module';

const routes: RouteModule[] = [
  {
    path: routeMap.products,
    component: Products,
    accessPage: 'Página Soluções FMC',
  },
];

export default routes;

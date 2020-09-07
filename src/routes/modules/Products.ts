import routeMap from 'routes/route-map';
import Products from 'pages/Products';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: routeMap.products,
    component: Products,
    accessPage: 'Página Soluções FMC',
  },
];

export default routes;

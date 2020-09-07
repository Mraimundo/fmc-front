import routeMap from 'routes/route-map';
import ParticipantSimulation from 'pages/ParticipantSimulation';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: routeMap.participantSimulation,
    component: ParticipantSimulation,
    accessPage: 'Página de Simulação de Participantes',
  },
];

export default routes;

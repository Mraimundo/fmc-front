import ParticipantIndication from 'pages/ParticipantIndication';
import routeMap from 'routes/route-map';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: routeMap.participantsIndication,
    component: ParticipantIndication,
    accessPage: 'Página indicação de participantes',
  },
];

export default routes;

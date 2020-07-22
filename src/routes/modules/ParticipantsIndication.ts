import ParticipantIndication from 'pages/ParticipantIndication';
import { RouteModule } from './RouteModule';

const routes: RouteModule[] = [
  {
    path: '/indication',
    component: ParticipantIndication,
    accessPage: 'Página indicação de participantes',
  },
];

export default routes;

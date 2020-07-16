import { pluginApi } from 'services/api';
import { ParticipantGroup } from './interfaces';

const mock: ParticipantGroup[] = [
  {
    id: 1,
    name: 'Estabelecimento X',
    points: 1000,
    urlPi: '#',
    category: 'Água',
  },
  {
    id: 2,
    category: 'Terra',
    name: 'Participante X',
    points: 1500,
    urlPi: '#',
  },
];

export default async (): Promise<ParticipantGroup[]> => {
  return mock;
};

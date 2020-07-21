import { pluginApi } from 'services/api';
import { Participant } from './interfaces';

const mock: Participant[] = [
  {
    id: 1,
    imageUrl: '',
    name: 'Participante X',
    points: 1500,
    type: 'cpf',
    urlPi: '#',
  },
  {
    id: 2,
    imageUrl: '',
    name: 'Estabelecimento X',
    points: 1000,
    type: 'cnpj',
    urlPi: '#',
  },
];

interface ApiResponse {
  participant?: {
    id?: number;
    name: string;
    picture: string;
    points: number;
    url_pi: string;
  };
  establishment?: {
    id?: number;
    name: string;
    picture: string;
    points: number;
    url_pi: string;
  };
}

export default async (): Promise<Participant[]> => {
  const {
    data: { establishment, participant },
  } = await pluginApi.get<ApiResponse>('marketplace/points');
  const result: Participant[] = [];

  if (establishment?.id) {
    result.push({
      id: establishment.id,
      imageUrl: establishment.picture,
      name: establishment.name,
      points: establishment.points,
      type: 'cnpj',
      urlPi: establishment.url_pi,
    });
  }

  if (participant?.id) {
    result.push({
      id: participant.id,
      imageUrl: participant.picture,
      name: participant.name,
      points: participant.points,
      type: 'cpf',
      urlPi: participant.url_pi,
    });
  }

  return result;
};
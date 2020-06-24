import { pluginApi } from 'services/api';
import { ParticipantIndication } from './interfaces/ParticipantIndication';

const status = (statusNumber: number): string => {
  switch (statusNumber) {
    case 0:
      return 'Pré-cadastro';
    case 1:
      return 'Pré-cadastro';
    default:
      return 'Sem status definido';
  }
};

interface ParticipantIndicationApi {
  id: number;
  name: string;
  profile: string;
  email: string;
  indicatedDate: Date;
  status: number;
}

interface Response {
  indications: ParticipantIndicationApi[];
}

export default async (): Promise<ParticipantIndication[]> => {
  // const { data } = await pluginApi.get<Response>('data');

  const data = {
    indications: [
      {
        id: 1,
        name: 'Teste da Silva',
        profile: 'Focal',
        email: 'test@test.test',
        indicatedDate: new Date(),
        status: 1,
      },
      {
        id: 1,
        name: 'Teste da Silva',
        profile: 'Focal',
        email: 'test@test.test',
        indicatedDate: new Date(),
        status: 0,
      },
    ],
  };

  const indications = data.indications.map(item => ({
    ...item,
    status: status(item.status),
  }));

  return indications;
};

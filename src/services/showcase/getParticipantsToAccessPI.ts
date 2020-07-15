import { Participant } from './interfaces';

const mock: Participant[] = [
  {
    id: 1,
    image_url: '',
    name: 'Estabelecimento X',
    points: 1000,
    type: 'cnpj',
    url_pi: '#',
  },
  {
    id: 2,
    image_url: '',
    name: 'Participante X',
    points: 1500,
    type: 'cpf',
    url_pi: '#',
  },
];

export default (): Participant[] => {
  return mock;
};

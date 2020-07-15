import { Participant } from '../interfaces';

const format = (value: number): string => {
  const { format: formatS } = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatS(value)
    .replace(/,/g, 'a')
    .replace(/\./g, ',')
    .replace(/a/g, '.');
};

export interface Response {
  id: number;
  imageUrl: string;
  name: string;
  points: string;
  urlAccess: string;
  type: 'cpf' | 'cnpj';
}

export default (participant: Participant): Response => {
  return {
    id: participant.id,
    imageUrl: participant.image_url,
    name: participant.name,
    points: format(participant.points),
    urlAccess: participant.url_pi,
    type: participant.type,
  };
};

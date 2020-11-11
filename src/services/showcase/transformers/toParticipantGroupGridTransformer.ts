import { ParticipantGroup } from '../interfaces';

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
  name: string;
  points: string;
  category: string;
}

export default (data: ParticipantGroup[]): Response[] => {
  return data.map(participant => ({
    id: participant.id,
    name: participant.name,
    points: format(participant.points),
    category: participant.category,
  }));
};

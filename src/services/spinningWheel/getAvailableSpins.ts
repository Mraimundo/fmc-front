import { vendavallApi } from 'services/api';
import { Spin } from './interfaces';

interface AwardApi {
  Awards: {
    id: number;
    title: string;
    value: string;
  };
}

interface SpinApi {
  id: number;
  title: string;
  description: string;
  awards: AwardApi[];
}

interface ApiResponse {
  roulettes: SpinApi[];
}

export default async (quizId: number): Promise<Spin | null> => {
  const {
    data: { roulettes: data },
  } = await vendavallApi.get<ApiResponse>(
    `roulettes?action_type=quiz&action_ref=${quizId}`,
  );

  if (data.length > 0) {
    const { id, title, description, awards } = data[0];
    return {
      id,
      description,
      title,
      prizes: awards.map(award => ({
        id: award.Awards.id,
        value: award.Awards.title,
      })),
    };
  }

  return null;

  /* return [
    { id: '100 pontos', value: '100 pontos' },
    { id: 'Tente novamente', value: 'Tente novamente' },
    { id: '250 pontos', value: '250 pontos' },
    { id: 'Tenho outra vez', value: 'Tenho outra vez' },
    { id: '300 pontos', value: '300 pontos' },
    { id: 'Surpresa', value: 'Surpresa' },
  ]; */
};

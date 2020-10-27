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
        winner: parseInt(award.Awards.value, 0) > 0,
      })),
    };
  }

  return null;
};

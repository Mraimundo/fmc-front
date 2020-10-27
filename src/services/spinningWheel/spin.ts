import { vendavallApi } from 'services/api';

interface ApiResponse {
  award_id: number;
}

export default async (spinId: number): Promise<{ prizeId: number }> => {
  const request = {
    roulette_id: spinId,
  };
  const {
    data: { award_id: awardId },
  } = await vendavallApi.post<ApiResponse>(`roulettes/spin`, request);

  if (!awardId) {
    throw new Error('Erro ao girar a Roleta');
  }

  return {
    prizeId: awardId,
  };
};

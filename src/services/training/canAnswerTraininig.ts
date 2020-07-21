import { vendavallApi } from 'services/api';

interface ApiResponse {
  can_answer: boolean;
  message: string;
}

export default async (trainingId: number): Promise<ApiResponse> => {
  try {
    const { data } = await vendavallApi.get<ApiResponse>(
      `trainings/${trainingId}/training-can-answer`,
    );
    return data;
  } catch (e) {
    return {
      can_answer: false,
      message:
        'Não foi possível conectar com o servidor. Tente novamente em instantes',
    };
  }
};

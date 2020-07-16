import { vendavallApi } from 'services/api';

interface ApiResponse {
  approved: boolean;
}

export default async (trainingId: number): Promise<boolean> => {
  const {
    data: { approved },
  } = await vendavallApi.get<ApiResponse>(`trainings/approved/${trainingId}`);
  return approved;
};

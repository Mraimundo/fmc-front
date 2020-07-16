import { vendavallApi } from 'services/api';

export default async (trainingId: number): Promise<void> => {
  await vendavallApi.post(`trainings/add-history-log/${trainingId}`);
};

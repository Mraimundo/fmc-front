import { vendavallApi } from 'services/api';
import transformer from './transformers/trainingApiToTraining';
import { Training } from './interfaces';
import { TrainingApi } from './interfaces/TrainingApi';

export default async (trainingId: number): Promise<Training> => {
  const { data } = await vendavallApi.get<TrainingApi>(
    `/trainings/get-training-by-id?training_id=${trainingId}`,
  );
  return transformer(data);
};

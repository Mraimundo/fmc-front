import { vendavallApi } from 'services/api';
import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { Training, Status } from './interfaces';
import { TrainingApi } from './interfaces/TrainingApi';
import transformer from './transformers/trainingApiToTraining';

interface Request {
  page?: number;
  limit?: number;
  status: Status;
}

interface Data {
  data: Training[];
  pagination: Pagination;
}

interface ApiResponse {
  trainings: TrainingApi[];
  pagination: Pagination;
}

export default async ({
  page = 1,
  limit = 3,
  status,
}: Request): Promise<Data> => {
  try {
    const {
      data: { trainings, pagination },
    } = await vendavallApi.get<ApiResponse>(
      `trainings/get-trainings?page=${page}&limit=3&status=${status}`,
    );
    console.log(trainings);

    return {
      data: trainings.map(item => transformer(item)),
      pagination,
    };
  } catch (e) {
    console.log(e);
    return {
      data: [],
      pagination: {} as Pagination,
    };
  }
};

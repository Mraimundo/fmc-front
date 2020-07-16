import { vendavallApi } from 'services/api';
import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { Training, Status } from './interfaces';
import { TrainingApi } from './interfaces/TrainingApi';
import transformer from './transformers/trainingApiToTraining';

interface Request {
  page?: number;
  limit?: number;
  status: Status;
  categoryId?: number | null;
}

interface Data {
  data: Training[];
  pagination: Pagination;
}

interface ApiResponse {
  data: TrainingApi[];
  pagination: Pagination;
}

export default async ({
  page = 1,
  limit = 3,
  status,
  categoryId,
}: Request): Promise<Data> => {
  try {
    let extraSearch = '';
    if (categoryId) {
      extraSearch = `&categories[0]=${categoryId}`;
    }
    const {
      data: { data, pagination },
    } = await vendavallApi.get<ApiResponse>(
      `trainings?status[0]=${status}&page=${page}&limit=${limit}${extraSearch}`,
    );

    return {
      data: data.map(item => transformer(item)),
      pagination,
    };
  } catch (e) {
    return {
      data: [],
      pagination: {} as Pagination,
    };
  }
};

import { vendavallApi } from 'services/api';
import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { Training, Status } from './interfaces';
import { TrainingApi } from './interfaces/TrainingApi';
import transformer from './transformers/trainingApiToTraining';

interface Request {
  page?: number;
  limit?: number;
  status: Status[];
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
  limit = 15,
  status,
  categoryId,
}: Request): Promise<Data> => {
  try {
    let extraSearch = '';
    if (categoryId) {
      extraSearch = `&categories[0]=${categoryId}`;
    }

    let statusSearch = '';
    status.forEach((element, index) => {
      statusSearch += `&status[${index}]=${element}`;
    });

    const {
      data: { data, pagination },
    } = await vendavallApi.get<ApiResponse>(
      `trainings?page=${page}${statusSearch}&limit=${limit}${extraSearch}`,
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

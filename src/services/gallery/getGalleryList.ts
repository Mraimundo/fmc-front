import { vendavallApi } from 'services/api';
import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { Media } from './interfaces';

interface Request {
  page?: number;
  limit?: number;
  type: 'video' | 'document' | 'image';
}

interface ApiResponse {
  data: Media[];
  pagination: Pagination;
}

export default async ({
  page = 1,
  limit = 6,
  type,
}: Request): Promise<ApiResponse> => {
  /*
    End point aceita os parametros
    page=1&limit=15&order=desc&type=video
  */
  try {
    const {
      data: { data, pagination },
    } = await vendavallApi.get<ApiResponse>(
      `gallery?limit=${limit}&page=${page}&types[0]=${type}`,
    );
    return {
      data,
      pagination,
    };
  } catch (e) {
    return {
      data: [],
      pagination: {} as Pagination,
    };
  }
};

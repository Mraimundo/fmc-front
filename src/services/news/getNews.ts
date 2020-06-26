import { vendavallApi } from 'services/api';
import { Pagination } from 'config/constants/vendavallPaginationInterface';

interface Request {
  page?: number;
}

interface ApiResponse {
  data: News[];
  pagination: Pagination;
}

export default async ({ page = 1 }: Request): Promise<Subject[]> => {
  /*
    End point aceita os parametros
    search=a&categories[0]=1&categories[1]=2&limit=6&page=3
  */
  try {
    const {
      data: { subjects },
    } = await vendavallApi.get<ApiResponse>(`news?limit=6&page=${page}`);
    return subjects || [];
  } catch (e) {
    return [];
  }
};

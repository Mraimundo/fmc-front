import { vendavallApi } from 'services/api';
import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { Surveys } from './interfaces';

interface Request {
  page?: number;
  limit?: number;
  ignoreNewsId?: number | null;
}

interface ApiResponse {
  data: Surveys[];
  pagination: Pagination;
}

interface Response {
  news: Surveys[];
  pagination: Pagination;
}

export default async ({
  page = 1,
  limit = 6,
  ignoreNewsId = null,
}: Request): Promise<Response> => {
  /*
    End point aceita os parametros
    search=a&categories[0]=1&categories[1]=2&limit=6&page=3
  */

  //  /vendavall/api/v2/news?search=a&categories[0]=1&categories[1]=2&limit=15&page=1",

  // /vendavall/api/v2/trainings?categories[0]=1&categories[1]=2&status[0]=available&status[1]=initiated&status[2]=closed&page=1&limit=15&order=desc",

  try {
    let extraSeacrh = '';
    if (ignoreNewsId) {
      extraSeacrh += `&ignore_id=${ignoreNewsId}`;
    }
    const {
      data: { data: news, pagination },
    } = await vendavallApi.get<ApiResponse>(
      `news?limit=${limit}&page=${page}${extraSeacrh}`,
    );
    return {
      news,
      pagination,
    };
  } catch (e) {
    return {
      news: [],
      pagination: {} as Pagination,
    };
  }
};

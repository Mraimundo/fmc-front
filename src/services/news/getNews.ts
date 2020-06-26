import { vendavallApi } from 'services/api';

interface Request {
  page?: number;
}

export default async ({ page = 1 }: Request): Promise<Subject[]> => {
  /*
    End point aceita os parametros
    search=a&categories[0]=1&categories[1]=2&limit=6&page=3
  */
  try {
    const {
      data: { subjects },
    } = await vendavallApi.get<ApiResponse>(`news?limit=6&page=3`);
    return subjects || [];
  } catch (e) {
    return [];
  }
};

import getNews from './getNewsList';
import { News } from './interfaces';

export default async (ignoreNewsId: number): Promise<News[]> => {
  const { news } = await getNews({ limit: 3, page: 1, ignoreNewsId });
  return news;
};

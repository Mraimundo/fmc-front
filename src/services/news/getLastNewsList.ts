import getNews from './getNewsList';
import { News } from './interfaces';

export default async (): Promise<News[]> => {
  const { news } = await getNews({ limit: 3, page: 1 });
  return news;
};

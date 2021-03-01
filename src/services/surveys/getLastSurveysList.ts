import getSurveys from './getSurveysList';
import { Surveys } from './interfaces';

export default async (ignoreNewsId: number): Promise<Surveys[]> => {
  const { news } = await getSurveys({ limit: 3, page: 1, ignoreNewsId });
  return news;
};

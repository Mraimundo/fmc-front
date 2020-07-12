import { vendavallApi } from 'services/api';
import getUrlToForceDownload from 'services/storage/getUrlToForceDownload';
import { Training } from './interfaces';

const training: Training = {
  id: 1,
  title: 'Nome do treinamento',
  start_date: new Date(),
  end_date: new Date(),
  status: 0,
  number_of_questions: 10,
  media: [
    {
      id: 1,
      title: 'test',
      type: 'video',
      url: 'https://vimeo.com/73224952',
    },
    {
      id: 2,
      title: 'test',
      type: 'document',
      url: getUrlToForceDownload({
        url:
          'https://storage.vendavall.com.br/photos/1593810759.5eff9f47951596.43436190.pdf',
        filename: 'download.pdf',
      }),
    },
  ],
  summary: 'test',
  body: 'test',
  image_url:
    'https://storage.vendavall.com.br/photo/1593810092.5eff9cac29f1e2.50823230.png',
  category: [
    {
      id: 1,
      name: 'Categoria 1',
    },
  ],
};

export default async (trainingId: number): Promise<Training> => {
  return training;
  /* const {
      data: { roles },
    } = await vendavallApi.get<ApiResponse>(`roles`); */
};

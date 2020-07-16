import { pluginApi } from 'services/api';

interface Request {
  type: 'cpf' | 'cnpj';
  pictureUrl: string;
}

export default async ({ type, pictureUrl }: Request): Promise<void> => {
  const request = {
    picture: pictureUrl,
  };
  let url = 'participants/edit/picture';
  if (type === 'cnpj') {
    url = 'participants/establishments/focal-picture';
  }

  await pluginApi.post(url, request);
};

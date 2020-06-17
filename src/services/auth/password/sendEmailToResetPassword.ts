import { vendavallApi } from 'services/api';

export interface Response {
  message: string;
}

export default async (cpf: string): Promise<Response> => {
  const {
    data: { message },
  } = await vendavallApi.post<Response>('participants/recover-password/send', {
    cpf,
    type: 'Email',
  });

  return { message };
};

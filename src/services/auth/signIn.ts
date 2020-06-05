import { vendavallApi } from 'services/api';

interface SignInParams {
  cpf: string;
  password: string;
}

export interface SignInResponse {
  token: string;
}

export default async ({
  cpf,
  password,
}: SignInParams): Promise<SignInResponse> => {
  const {
    data: { token },
  } = await vendavallApi.post<SignInResponse>('login', {
    identifier: cpf,
    password,
  });

  return { token };
};

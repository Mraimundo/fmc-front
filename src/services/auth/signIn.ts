import { pluginApi } from 'services/api';

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
  } = await pluginApi.post<SignInResponse>('participants/login', {
    identifier: cpf,
    password,
  });

  return { token };
};

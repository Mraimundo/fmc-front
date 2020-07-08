import { vendavallApi } from 'services/api';

interface SignInParams {
  cpf: string;
  password: string;
}

export interface SignInResponse {
  token: string;
}

const signInByToken = async (
  tokenToAuthenticate: string,
): Promise<SignInResponse> => {
  const {
    data: { token },
  } = await vendavallApi.post<SignInResponse>('login/token', {
    token: tokenToAuthenticate,
  });

  return { token };
};

const signIn = async ({
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

export default async (data: SignInParams | string): Promise<SignInResponse> => {
  return typeof data === 'string' ? signInByToken(data) : signIn(data);
};

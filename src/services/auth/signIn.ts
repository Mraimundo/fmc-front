import { pluginApi, vendavallApi } from 'services/api';

interface SignInParams {
  cpf: string;
  password: string;
}

interface Establishment {
  establishment: {
    id: number;
  };
  role: {
    id: number;
  };
}

interface ApiResponse {
  token: string;
  establishments: Establishment[];
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
  let {
    data: { token, establishments },
  } = await pluginApi.post<ApiResponse>('participants/login', {
    identifier: cpf,
    password,
  });

  if (!token && establishments.length > 0) {
    const { data } = await pluginApi.post<ApiResponse>('participants/login', {
      identifier: cpf,
      password,
      establishment_id: establishments[0].establishment.id,
      role_id: establishments[0].role.id,
    });
    token = data.token;
  }

  return { token };
};

export default async (data: SignInParams | string): Promise<SignInResponse> => {
  return typeof data === 'string' ? signInByToken(data) : signIn(data);
};

import { pluginApi } from 'services/api';

interface SignInParams {
  cpf: string;
  password: string;
}

export interface Participant {
  id: number;
  email: string;
  cpf: string;
  name: string;
  picture: string;
  status: number;
  status_text: string;
}

export interface SignInResponse {
  token: string;
  participant: Participant;
}

export default async ({
  cpf,
  password,
}: SignInParams): Promise<SignInResponse> => {
  const {
    data: { token, participant },
  } = await pluginApi.post<SignInResponse>('login', {
    identifier: cpf,
    password,
  });

  return {
    token,
    participant,
  };
};

import { pluginApi, vendavallApi } from 'services/api';

interface Option {
  name: 'Email' | 'Sms';
  address: string;
}

type OptionsResponse = Option[];

interface SendMailResponse {
  message: string;
}

export interface Response {
  message: string;
  email: string;
}

const getEmail = async (cpf: string): Promise<string> => {
  const { data } = await vendavallApi.post<OptionsResponse>(
    'participants/recover-password/options',
    { cpf },
  );
  const email = data.find(item => item.name === 'Email')?.address;
  return email || '';
};

export default async (cpf: string): Promise<Response> => {
  const email = await getEmail(cpf);
  const {
    data: { message },
  } = await pluginApi.post<SendMailResponse>(
    'participants/recover-password/send',
    {
      cpf,
      type: 'Email',
    },
  );

  return { message, email };
};

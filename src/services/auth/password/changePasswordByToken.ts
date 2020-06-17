import { pluginApi } from 'services/api';

export interface Response {
  message: string;
}

export default async (
  token: string,
  newPassword: string,
): Promise<Response> => {
  const {
    data: { message },
  } = await pluginApi.post<Response>('participants/change-password/change', {
    token,
    password: newPassword,
    passwordRepeat: newPassword,
  });

  return { message };
};

import { pluginApi } from 'services/api';
import { Participant } from 'services/auth/interfaces/Participant';

export default async (): Promise<Participant> => {
  try {
    const { data } = await pluginApi.get<Participant>('participants/profile');
    return data;
  } catch {
    return {} as Participant;
  }
};

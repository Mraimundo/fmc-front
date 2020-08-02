import { pluginApi } from 'services/api';
import { Participant } from 'services/auth/interfaces/Participant';

export default async (): Promise<Participant> => {
  try {
    const { data } = await pluginApi.get<Participant>('participants/profile');
    // MOCK MAYCONN TODO
    return { ...data, profile_value: data.profile_value || 'GRV' };
  } catch {
    return {} as Participant;
  }
};

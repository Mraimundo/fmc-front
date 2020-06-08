import { vendavallApi } from 'services/api';

export default async (): Promise<boolean> => {
  try {
    await vendavallApi.get('ping');
    return true;
  } catch {
    return false;
  }
};

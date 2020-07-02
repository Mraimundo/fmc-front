import { vendavallApi } from 'services/api';
import { Popup } from './interfaces';

interface ApiResponse {
  popups: Popup[];
}

export default async (page: string): Promise<Popup[]> => {
  try {
    const {
      data: { popups },
    } = await vendavallApi.get<ApiResponse>(`popups?page=${page}`);
    return popups;
  } catch (e) {
    return [];
  }
};

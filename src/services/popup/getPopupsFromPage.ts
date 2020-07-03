import { vendavallApi } from 'services/api';
import { Popup } from './interfaces';

interface PopupResponse {
  id: number;
  title: string;
  body: string;
  check_participant: number;
}

interface ApiResponse {
  popups: PopupResponse[];
}

export default async (page: string): Promise<Popup[]> => {
  try {
    const {
      data: { popups },
    } = await vendavallApi.get<ApiResponse>(`popups?page=${page}`);
    return popups.map(item => ({
      id: item.id,
      title: item.title,
      body: item.body,
      canMarkAsRead: !!item.check_participant,
    }));
  } catch (e) {
    return [];
  }
};

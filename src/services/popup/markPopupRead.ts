import { vendavallApi } from 'services/api';

export default async (popupId: number): Promise<void> => {
  const request = { popup_id: popupId };
  await vendavallApi.post('popups/mark-as-read', request);
};

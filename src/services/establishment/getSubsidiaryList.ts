import { pluginApi } from 'services/api';

interface Subsidiary {
  id: number;
  establishment_id: number;
  name: string;
  city: string;
}

interface ApiResponse {
  subsidiaries: Subsidiary[];
}

export default async (
  establishmentId: number | string,
): Promise<Subsidiary[]> => {
  try {
    const {
      data: { subsidiaries },
    } = await pluginApi.get<ApiResponse>(
      `participants/subsidiaries/${establishmentId}`,
    );
    return subsidiaries || [];
  } catch (e) {
    return [];
  }
};

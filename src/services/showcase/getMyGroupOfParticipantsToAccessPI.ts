import { pluginApi } from 'services/api';
import { ParticipantGroup } from './interfaces';

interface ApiResponse {
  data: ParticipantGroup[];
}

interface Filters {
  typeName?: string;
  categoryName?: string;
}

export default async (filters: Filters): Promise<ParticipantGroup[]> => {
  let extraSearch = '?limit=100';

  if (filters.categoryName) {
    extraSearch += `&category_name=${filters.categoryName}`;
  }

  if (filters.typeName) {
    extraSearch += `&type_name=${filters.typeName}`;
  }

  const {
    data: { data },
  } = await pluginApi.get<ApiResponse>(
    `premio-ideall/establishments${extraSearch}`,
  );

  return data;
};

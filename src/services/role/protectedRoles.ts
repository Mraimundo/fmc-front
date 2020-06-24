import { pluginApi } from 'services/api';

interface Role {
  id: number;
  name: string;
}

interface ApiResponse {
  roles: Role[];
}

interface Option {
  value: string;
  title: string;
}

const getProtectedRoles = async (): Promise<Role[]> => {
  try {
    const {
      data: { roles },
    } = await pluginApi.get<ApiResponse>(`participants/roles`);
    return roles || [];
  } catch (e) {
    return [];
  }
};

const getProtecedRolesForSelect = async (): Promise<Option[]> => {
  const roles = await getProtectedRoles();
  return roles.map(item => ({
    value: item.id.toString(),
    title: item.name,
  }));
};

export { getProtecedRolesForSelect, getProtectedRoles };

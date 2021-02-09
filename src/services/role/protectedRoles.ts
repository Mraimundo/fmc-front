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

const getProtecedRolesForSelect = async (excludedRoles: string[] = []): Promise<Option[]> => {
  const result = await getProtectedRoles();
  const roles = result.filter(role => !excludedRoles.includes(role.name));

  return roles.map(item => ({
    value: item.id.toString(),
    title: item.name,
  }));
};

export { getProtecedRolesForSelect, getProtectedRoles };

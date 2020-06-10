import { vendavallApi } from 'services/api';

interface Role {
  id: number;
  identifier: string;
  name: string;
}

interface ApiResponse {
  roles: Role[];
}

interface Option {
  value: string;
  title: string;
}

const getPublicRoles = async (): Promise<Role[]> => {
  try {
    const {
      data: { roles },
    } = await vendavallApi.get<ApiResponse>(`roles`);
    return roles || [];
  } catch (e) {
    return [];
  }
};

const getPublicRolesForSelect = async (): Promise<Option[]> => {
  const roles = await getPublicRoles();
  return roles.map(item => ({
    value: item.id.toString(),
    title: item.name,
  }));
};

export { getPublicRoles, getPublicRolesForSelect };

export const toggleRoleSelection = (
  selectedRoles: number[] | null,
  roleId: number,
): number[] => {
  if (!selectedRoles) return [roleId];

  if (selectedRoles.includes(roleId)) {
    return selectedRoles.filter((id: number) => id !== roleId);
  }

  return [...selectedRoles, roleId];
};

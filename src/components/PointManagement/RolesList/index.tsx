import React from 'react';

import { Role } from 'state/modules/point-management/team-awards/types';
import { Label, Loader } from 'components/PointManagement';
import { List, Item } from './styles';

type Props = {
  roles?: Role[] | null;
  selectedRoles: number[] | null;
  onSelect: (id?: number) => void;
  isFetchingRoles: boolean;
};

const RolesList: React.FC<Props> = ({
  roles,
  selectedRoles,
  onSelect,
  isFetchingRoles = false,
}) => {
  const isSelected = (roleId: number): boolean => {
    if (!selectedRoles) return false;

    return selectedRoles.includes(roleId);
  };

  const hasSelectedRoles = !!selectedRoles;

  return (
    <>
      <Label>Filtrar Cargos</Label>
      <List data-testid="roles-list">
        {!!roles && (
          <>
            <Item selected={!hasSelectedRoles} onClick={() => onSelect()}>
              Todos
            </Item>
            {roles.map(({ id, name }: Role) => (
              <Item
                key={name}
                selected={isSelected(id)}
                onClick={() => onSelect(id)}
              >
                {name}
              </Item>
            ))}
          </>
        )}
      </List>
      {isFetchingRoles && <Loader>buscando cargos...</Loader>}
    </>
  );
};

export default RolesList;

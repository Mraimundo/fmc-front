import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';

import { Role } from 'state/modules/point-management/team-awards/types';
import { List, Item } from './styles';

type Props = {
  roles?: Role[] | null;
  selectedRoles: number[] | null;
  onSelect: (id: number) => void;
};

const RolesList: React.FC<Props> = ({ roles, selectedRoles, onSelect }) => {
  const isSelected = (roleId: number): boolean => {
    if (!selectedRoles) return false;

    return selectedRoles.includes(roleId);
  };

  return (
    <>
      <InputLabel id="filter-branch">Filtrar Cargos</InputLabel>
      <List data-testid="roles-list">
        {!!roles &&
          roles.map(({ id, name }: Role) => (
            <Item
              key={id}
              selected={isSelected(id)}
              onClick={() => onSelect(id)}
            >
              {name}
            </Item>
          ))}
      </List>
    </>
  );
};

export default RolesList;
